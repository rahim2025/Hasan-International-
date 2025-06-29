import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User, Shield, Package, Home, Users, Briefcase, Menu, X, Phone } from "lucide-react";
import NotificationBell from "./NotificationBell";
import { useState } from "react";

export const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">            
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white border border-primary/20 shadow-sm flex-shrink-0 flex items-center justify-center p-1">
                <img 
                  src="/logo.jpg" 
                  alt="Hasan International Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-base sm:text-lg font-bold truncate">HASAN INTERNATIONAL</h1>
            </Link>              
            {/* Always visible navigation */}            
            <nav className="hidden md:flex items-center gap-4">
              {/* <Link
                to="/home"
                className="btn btn-sm btn-ghost gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Link> */}
              <Link
                to="/"
                className="btn btn-sm btn-ghost gap-2"
              >
                <Package className="w-4 h-4" />
                Products
              </Link>
                           <Link
                to="/about"
                className="btn btn-sm btn-ghost gap-2"
              >
                <Users className="w-4 h-4" />
                About Us
              </Link>
              <Link
                to="/careers"
                className="btn btn-sm btn-ghost gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Careers
              </Link>
              <Link
                to="/contact"
                className="btn btn-sm btn-ghost gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact
              </Link>
 
            </nav>
          </div>          
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Mobile Menu Button */}
            <button
              className="btn btn-sm btn-ghost md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
            
            {authUser ? (
              <>
                {/* Notification Bell for Admin Users */}
                <NotificationBell />
                
                <Link to="/profile" className="btn btn-sm gap-1 sm:gap-2">
                  <User className="size-4 sm:size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
                
                {authUser.role === "admin" && (
                  <Link to="/admin" className="btn btn-sm gap-1 sm:gap-2 btn-error">
                    <Shield className="size-4 sm:size-5" />
                    <span className="hidden sm:inline">Admin</span>
                  </Link>
                )}

                <button className="btn btn-sm gap-1 sm:gap-2" onClick={logout}>
                  <LogOut className="size-4 sm:size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              <div className="flex items-center gap-1 sm:gap-2">
                <Link to="/login" className="btn btn-sm btn-primary text-xs sm:text-sm px-2 sm:px-4">
                  <span className="hidden xs:inline">Login</span>
                  <span className="xs:hidden">Login</span>
                </Link>
                <Link to="/signup" className="btn btn-sm btn-outline text-xs sm:text-sm px-2 sm:px-4">
                  <span className="hidden xs:inline">Sign Up</span>
                  <span className="xs:hidden">SignUp</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-300 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="btn btn-sm btn-ghost justify-start gap-2"
                onClick={closeMobileMenu}
              >
                <Package className="w-4 h-4" />
                Products
              </Link>
              <Link
                to="/careers"
                className="btn btn-sm btn-ghost justify-start gap-2"
                onClick={closeMobileMenu}
              >
                <Briefcase className="w-4 h-4" />
                Careers
              </Link>
              <Link
                to="/contact"
                className="btn btn-sm btn-ghost justify-start gap-2"
                onClick={closeMobileMenu}
              >
                <Phone className="w-4 h-4" />
                Contact
              </Link>
              <Link
                to="/about"
                className="btn btn-sm btn-ghost justify-start gap-2"
                onClick={closeMobileMenu}
              >
                <Users className="w-4 h-4" />
                About Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;