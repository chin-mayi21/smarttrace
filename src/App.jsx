import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import DemoGuideBar from './components/common/DemoGuideBar';

// Screens
import LoginScreen from './components/screens/LoginScreen';
import DashboardScreen from './components/screens/DashboardScreen';
import AiInspectionScreen from './components/screens/AiInspectionScreen';
import TraceabilityScreen from './components/screens/TraceabilityScreen';
import ConsumerPortalScreen from './components/screens/ConsumerPortalScreen';
import ReportsScreen from './components/screens/ReportsScreen';
import ManufacturerPortalScreen from './components/screens/ManufacturerPortalScreen';
import EcommerceScreen from './components/screens/EcommerceScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentRole, setCurrentRole] = useState("Enforcement Officer");
  const [currentScreen, setCurrentScreen] = useState("login");
  const [selectedProductId, setSelectedProductId] = useState("PRD-2024-000789");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (role) => {
    setCurrentRole(role);
    setIsAuthenticated(true);
    if (role === "Consumer") setCurrentScreen("consumer");
    else if (role === "Manufacturer/Packer") setCurrentScreen("manufacturer");
    else if (role === "E-commerce platform") setCurrentScreen("ecommerce");
    else setCurrentScreen("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen("login");
  };

  const handleNavigate = (screenId) => {
    setCurrentScreen(screenId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
  };

  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
  };

  // If viewing login screen or not authenticated
  if (!isAuthenticated || currentScreen === "login") {
    return (
      <div>
        <DemoGuideBar 
          currentScreen="login" 
          onNavigate={handleNavigate} 
          currentRole={currentRole} 
          onRoleChange={handleRoleChange} 
        />
        <LoginScreen onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900">
      
      {/* SIH 2026 Presentation Demo Guide Banner */}
      <DemoGuideBar 
        currentScreen={currentScreen} 
        onNavigate={handleNavigate} 
        currentRole={currentRole} 
        onRoleChange={handleRoleChange} 
      />

      {/* Main App Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          currentRole={currentRole}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onLogout={handleLogout}
        />

        {/* Content Wrapper */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          
          {/* Top Navigation Bar */}
          <Navbar
            currentRole={currentRole}
            onRoleChange={handleRoleChange}
            onNavigate={handleNavigate}
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            currentScreen={currentScreen}
          />

          {/* Dynamic Screen View */}
          <main className="flex-1 p-4 md:p-6 max-w-7xl w-full mx-auto">
            {currentScreen === "dashboard" && (
              <DashboardScreen 
                onNavigate={handleNavigate} 
                onSelectProduct={handleSelectProduct} 
              />
            )}

            {currentScreen === "inspection" && (
              <AiInspectionScreen 
                selectedProductId={selectedProductId} 
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
              />
            )}

            {currentScreen === "traceability" && (
              <TraceabilityScreen 
                onNavigate={handleNavigate} 
              />
            )}

            {currentScreen === "consumer" && (
              <ConsumerPortalScreen 
                onNavigate={handleNavigate} 
              />
            )}

            {currentScreen === "reports" && (
              <ReportsScreen 
                onNavigate={handleNavigate} 
              />
            )}

            {currentScreen === "manufacturer" && (
              <ManufacturerPortalScreen 
                onNavigate={handleNavigate} 
              />
            )}

            {currentScreen === "ecommerce" && (
              <EcommerceScreen 
                onNavigate={handleNavigate} 
              />
            )}

            {/* Default fallback */}
            {currentScreen === "complaints" && (
              <ConsumerPortalScreen 
                onNavigate={handleNavigate} 
              />
            )}
          </main>

        </div>

      </div>

    </div>
  );
}
