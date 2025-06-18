import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import OrderPage from './pages/OrderPage'
import ProfilePage from './pages/ProfilePage'
import { ProductProvider } from './context/ProductContext'
import { OrderProvider } from './context/OrderContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <OrderProvider>
          <Router>
            <div className="min-h-screen bg-secondary-50 flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </OrderProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App