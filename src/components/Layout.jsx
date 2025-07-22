// src/components/Layout.jsx
function Layout({ children }) {
  return (
    <div className="app">
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;
