import { useState } from 'react'
import Amazon from './Amazon'
import LuxeStay from './LuxeStay'
import StudentHub from './StudentHub'
import './App.css'

const sections = {
  overview: { label: 'Overview', title: 'NexusHub Overview', icon: '◔' },
  shopping: { label: 'Shopping', title: 'Amazon Shopping', icon: '♧' },
  luxe: { label: 'Luxe Stay', title: 'Luxe Stay Room Booking', icon: '▤' },
  academy: { label: 'Academy', title: 'Student Academy', icon: '◇' },
}

function loadLocal(key) {
  try { return JSON.parse(localStorage.getItem(key)) || [] } catch { return [] }
}

function Overview({ bookings, students, onNavigate }) {
  const cards = [
    { key: 'shopping', icon: '♧', title: 'Shopping', text: 'Browse products and build your cart.', value: '4 products' },
    { key: 'luxe', icon: '▤', title: 'Luxe Stay', text: 'Reserve premium rooms and suites.', value: `${bookings.length} bookings` },
    { key: 'academy', icon: '◇', title: 'Academy', text: 'Manage student records and performance.', value: `${students.length} students` },
  ]

  return (
    <section className="overview fade-in">
      <div className="welcome-card">
        <span className="eyebrow">YOUR DIGITAL WORKSPACE</span>
        <h2>Everything you need, in one hub.</h2>
        <p>Shop essentials, arrange a luxury stay, or manage your student directory from a single dashboard.</p>
      </div>
      <div className="overview-grid">
        {cards.map((card) => (
          <button key={card.key} className="module-card" onClick={() => onNavigate(card.key)}>
            <span className="module-icon">{card.icon}</span>
            <span className="module-copy"><strong>{card.title}</strong><small>{card.text}</small></span>
            <span className="module-value">{card.value} →</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [active, setActive] = useState('luxe')
  const [bookings, setBookings] = useState(() => loadLocal('luxe_stay_bookings'))
  const [students, setStudents] = useState(() => loadLocal('nexus_hub_students'))
  const [lightMode, setLightMode] = useState(false)

  const page = sections[active]

  return (
    <div className={lightMode ? 'dashboard light-mode' : 'dashboard'}>
      <aside className="sidebar">
        <button className="logo" onClick={() => setActive('overview')} aria-label="NexusHub overview">
          <span>N</span><strong>NexusHub</strong>
        </button>

        <nav className="side-nav" aria-label="Main navigation">
          {Object.entries(sections).map(([key, item]) => (
            <button key={key} className={active === key ? 'nav-item active' : 'nav-item'} onClick={() => setActive(key)}>
              <span className="nav-icon">{item.icon}</span><span>{item.label}</span>
              {key === 'academy' && students.length > 0 && <em>{students.length}</em>}
            </button>
          ))}
        </nav>

        <button className="theme-toggle" onClick={() => setLightMode((value) => !value)}>
          <span>{lightMode ? '☾' : '☼'}</span> {lightMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <h1>{page.title}</h1>
          <div className="profile"><span>AC</span><strong>Anurag Chauhan</strong></div>
        </header>
        <div className="page-content">
          {active === 'overview' && <Overview bookings={bookings} students={students} onNavigate={setActive} />}
          {active === 'shopping' && <Amazon />}
          {active === 'luxe' && <LuxeStay bookings={bookings} setBookings={setBookings} />}
          {active === 'academy' && <StudentHub students={students} setStudents={setStudents} />}
        </div>
      </main>
    </div>
  )
}

export default App
