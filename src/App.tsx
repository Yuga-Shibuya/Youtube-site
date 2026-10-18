import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { ArrowLeft, Bell, Clock3, Clapperboard, History, House, Menu, Mic, MoreVertical, Play, Search, ThumbsDown, ThumbsUp, TvMinimalPlay, Video, VideoOff, X } from 'lucide-react'
import { Link, NavLink, Route, Routes, matchPath, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import { Skeleton } from './components/ui/skeleton'
import { videos, formatLikeCount, formatPublishedAt, formatSubscriberCount, formatViewCount, type VideoItem } from './data/videos'
import './App.css'

type Category = 'すべて' | '音楽' | 'ゲーム' | 'ニュース' | '料理' | 'スポーツ'
const categories: Category[] = ['すべて', '音楽', 'ゲーム', 'ニュース', '料理', 'スポーツ']
const sidebarItems = [
  { label: 'ホーム', path: '/', icon: House }, { label: 'ショート', path: '/shorts', icon: Clapperboard }, { label: '登録チャンネル', path: '/subscriptions', icon: TvMinimalPlay },
  { label: '履歴', path: '/history', icon: History }, { label: '後で見る', path: '/watch-later', icon: Clock3 },
]

function VideoCard({ video }: { video: VideoItem }) {
  const url = `/watch/${video.id}`
  return <article className="video-card">
    <Link className="thumbnail-link" to={url} aria-label={`${video.title}の視聴ページを開く`}>
      <img src={video.thumbnailUrl} alt="" loading="lazy" />
      <span className="video-duration">{video.duration}</span>
    </Link>
    <div className="video-info">
      <img className="channel-avatar" src={video.channelAvatarUrl} alt="" loading="lazy" />
      <div className="video-copy">
        <Link className="video-title" to={url}>{video.title}</Link>
        <p className="video-channel">{video.channel}</p>
        <p className="video-stats">{formatViewCount(video.viewCount)} ・ {formatPublishedAt(video.publishedAt)}</p>
      </div>
      <button className="icon-button video-more" type="button" aria-label={`${video.title}のその他の操作`}><MoreVertical size={19} strokeWidth={1.9} /></button>
    </div>
  </article>
}

function VideoCardSkeleton() {
  return <div className="video-card" aria-hidden="true">
    <Skeleton className="skeleton-thumbnail" />
    <div className="skeleton-details">
      <Skeleton className="skeleton-title" />
      <Skeleton className="skeleton-channel" />
    </div>
  </div>
}

function HomePage({ category, setCategory, searchTerm, visibleVideos, isLoading = false }: {
  category: Category
  setCategory: (category: Category) => void
  searchTerm: string
  visibleVideos: VideoItem[]
  isLoading?: boolean
}) {
  return <>
    {videos.length > 0 && <div className="category-bar" aria-label="動画カテゴリ">{categories.map(item => <button key={item} className={`category-chip ${category === item ? 'selected' : ''}`} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}><span>{item}</span></button>)}</div>}
    {isLoading ? <div className="video-grid" role="status" aria-label="動画を読み込み中">
      {Array.from({ length: 6 }, (_, index) => <VideoCardSkeleton key={index} />)}
    </div> : videos.length === 0 ? <section className="empty-state library-empty-state" aria-labelledby="library-empty-title">
      <VideoOff size={64} strokeWidth={1.4} aria-hidden="true" />
      <h1 id="library-empty-title">動画がまだありません</h1>
      <p>動画が追加されると、ここに一覧が表示されます。</p>
    </section> : <>
      {searchTerm && <p className="search-result-label">「{searchTerm}」の検索結果</p>}
      {visibleVideos.length > 0 ? <div className="video-grid">{visibleVideos.map(video => <VideoCard key={video.id} video={video} />)}</div> : <div className="empty-state"><Search size={36} strokeWidth={1.5} /><h1>動画が見つかりませんでした</h1><p>別のキーワードやカテゴリでお試しください。</p></div>}
    </>}
  </>
}

function WatchPage() {
  const { id } = useParams<'id'>()
  const index = videos.findIndex(video => String(video.id) === id)
  if (index < 0) return <NotFoundPage />
  const video = videos[index]
  const related = [...videos.slice(index + 1), ...videos.slice(0, index)].slice(0, 8)
  return <WatchDetails key={video.id} video={video} related={related} />
}

function WatchDetails({ video, related }: { video: VideoItem; related: VideoItem[] }) {
  const [subscribed, setSubscribed] = useState(false)
  const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null)

  return <div className="watch-page">
    <Link className="watch-back" to="/"><ArrowLeft size={18} strokeWidth={2} />ホームに戻る</Link>
    <div className="watch-layout">
      <div className="watch-primary">
        <div className="watch-player">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={`${video.title} - YouTube`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <h1 className="watch-title">{video.title}</h1>
        <div className="watch-actions-row">
          <img className="watch-channel-avatar" src={video.channelAvatarUrl} alt="" />
          <div className="watch-channel-copy"><strong>{video.channel}</strong><span>チャンネル登録者数 {formatSubscriberCount(video.subscriberCount)}</span></div>
          <button className={`subscribe-button ${subscribed ? 'is-subscribed' : ''}`} type="button" aria-pressed={subscribed} onClick={() => setSubscribed(value => !value)}>{subscribed ? '登録済み' : '登録'}</button>
          <div className="reaction-group" aria-label="動画への評価">
            <button className={reaction === 'like' ? 'is-selected' : ''} type="button" aria-label="高評価" aria-pressed={reaction === 'like'} onClick={() => setReaction(value => value === 'like' ? null : 'like')}><ThumbsUp size={19} strokeWidth={1.8} /><span>{formatLikeCount(video.likeCount)}</span></button>
            <span className="reaction-divider" />
            <button className={reaction === 'dislike' ? 'is-selected' : ''} type="button" aria-label="低評価" aria-pressed={reaction === 'dislike'} onClick={() => setReaction(value => value === 'dislike' ? null : 'dislike')}><ThumbsDown size={19} strokeWidth={1.8} /></button>
          </div>
        </div>
        <section className="watch-description" aria-label="動画の概要"><p className="description-meta">{formatViewCount(video.viewCount)}　{formatPublishedAt(video.publishedAt)}</p><a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">YouTube で元の動画を見る</a></section>
      </div>
      <aside className="related-videos" aria-label="関連動画">
        <h2>関連動画</h2>
        <div className="related-list">{related.map(item => <Link className="related-card" to={`/watch/${item.id}`} key={item.id}>
          <span className="related-thumbnail"><img src={item.thumbnailUrl} alt="" loading="lazy" /><span className="video-duration">{item.duration}</span></span>
          <span className="related-copy"><strong>{item.title}</strong><span>{item.channel}</span><span>{formatViewCount(item.viewCount)} ・ {formatPublishedAt(item.publishedAt)}</span></span>
        </Link>)}</div>
      </aside>
    </div>
  </div>
}

function SectionPage({ title }: { title: string }) {
  return <section className="section-page"><h1>{title}</h1><p>このページは準備中です。</p></section>
}

function NotFoundPage() {
  return <section className="not-found-page" aria-labelledby="not-found-title">
    <span className="not-found-code">404</span>
    <h1 id="not-found-title">ページが見つかりません</h1>
    <p>お探しのページは削除されたか、URL が間違っている可能性があります</p>
    <Link className="not-found-home" to="/">ホームに戻る</Link>
  </section>
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const isWatchPage = useMatch('/watch/:id') !== null
  const isNotFoundPage = !isWatchPage && !['/', '/shorts', '/subscriptions', '/history', '/watch-later'].some(path => matchPath({ path, end: true }, location.pathname))
  const isContentOnlyPage = isWatchPage || isNotFoundPage
  const [category, setCategory] = useState<Category>('すべて')
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768)
  useEffect(() => {
    const breakpoint = window.matchMedia('(min-width: 768px)')
    const syncSidebar = (event: MediaQueryListEvent) => setSidebarOpen(event.matches)
    breakpoint.addEventListener('change', syncSidebar)
    return () => breakpoint.removeEventListener('change', syncSidebar)
  }, [])
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  const visibleVideos = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase('ja-JP')
    return videos.filter(video => (category === 'すべて' || video.category === category) && (!query || `${video.title} ${video.channel} ${video.category}`.toLocaleLowerCase('ja-JP').includes(query)))
  }, [category, searchTerm])
  function handleSearch(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSearchTerm(searchInput); if (window.innerWidth < 768) setSidebarOpen(false); navigate('/') }
  return <div className={`app-shell ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
    <header className="site-header">
      <div className="header-brand">
        <button className="icon-button menu-button" type="button" aria-label="メニューを開閉" aria-controls="main-sidebar" aria-expanded={!isContentOnlyPage && sidebarOpen} onClick={() => setSidebarOpen(open => !open)}><Menu size={24} strokeWidth={1.8} /></button>
        <Link className="youtube-logo" to="/" aria-label="YouTube ホーム" onClick={() => { if (window.innerWidth < 768) setSidebarOpen(false) }}><span className="logo-mark"><Play size={17} fill="white" strokeWidth={0} /></span><span className="logo-word">YouTube</span><span className="logo-country">JP</span></Link>
      </div>
      <div className="header-search">
        <form className="search-form" role="search" onSubmit={handleSearch}>
          <input type="search" value={searchInput} onChange={event => setSearchInput(event.target.value)} placeholder="検索" aria-label="動画を検索" />
          {searchInput && <button className="clear-search" type="button" aria-label="検索内容を消去" onClick={() => { setSearchInput(''); setSearchTerm('') }}><X size={18} /></button>}
          <button className="search-submit" type="submit" aria-label="検索"><Search size={23} strokeWidth={1.9} /></button>
        </form>
        <button className="icon-button mic-button" type="button" aria-label="音声検索"><Mic size={21} strokeWidth={1.9} /></button>
      </div>
      <div className="header-actions">
        <button className="icon-button" type="button" aria-label="動画を作成"><Video size={23} strokeWidth={1.9} /></button>
        <button className="icon-button notification-button" type="button" aria-label="通知"><Bell size={23} strokeWidth={1.9} /></button>
        <button className="profile-avatar" type="button" aria-label="アカウント">K</button>
      </div>
    </header>
    {!isContentOnlyPage && sidebarOpen && <button className="sidebar-backdrop" type="button" aria-label="メニューを閉じる" onClick={() => setSidebarOpen(false)} />}
    {!isContentOnlyPage && <aside className="sidebar" id="main-sidebar" aria-label="メインメニュー">
      <nav className="sidebar-nav">{sidebarItems.map(({ label, path, icon: Icon }) => <NavLink key={path} to={path} end={path === '/'} onClick={() => { if (window.innerWidth < 768) setSidebarOpen(false) }} className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}><Icon size={23} strokeWidth={location.pathname === path ? 2.4 : 1.8} fill={location.pathname === path ? 'currentColor' : 'none'} /><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-divider" /><div className="sidebar-you">あなた</div><p className="sidebar-note">お気に入りの動画を見つけよう</p>
      <div className="sidebar-footer">概要　プレス　著作権<br />お問い合わせ　クリエイター<br /><span>© 2026 YouTube Clone</span></div>
    </aside>}
    <main className={`main-content ${isWatchPage ? 'watch-content' : isNotFoundPage ? 'not-found-content' : ''}`}>
      <Routes>
        <Route path="/" element={<HomePage category={category} setCategory={setCategory} searchTerm={searchTerm} visibleVideos={visibleVideos} />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/shorts" element={<SectionPage title="ショート" />} />
        <Route path="/subscriptions" element={<SectionPage title="登録チャンネル" />} />
        <Route path="/history" element={<SectionPage title="履歴" />} />
        <Route path="/watch-later" element={<SectionPage title="後で見る" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
}
export default App
