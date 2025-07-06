import React, { useState, useEffect } from 'react';
import { Sun, Moon, Zap, Users, Bot, Wallet, ArrowRight, Menu, X, Star, Upload, FileText, Building, MapPin, Clock, DollarSign, Filter, Search, Briefcase, Globe, Shield, Coins, TrendingUp, Award, Target, ChevronRight, Download, Eye, Heart, Share2, MessageCircle, UserPlus, Calendar, Mail, Phone, Linkedin, Github, Twitter, Code, Database, Smartphone, Palette, BarChart, Cpu, Cloud, Lock, Layers, Headphones, Camera, Gamepad2, Rocket, Atom, Microscope, Wrench, Truck, Home, Stethoscope, GraduationCap, Scale, Megaphone, PenTool, Music, Video, Book, Coffee, Utensils, Plane, Car, ShoppingBag, Gift, Sparkles, Zap as Lightning, Activity, Wifi, Battery, Signal, Volume2, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Mic, MicOff, Camera as CameraIcon, CameraOff, Monitor, Tablet, Watch, Headphones as HeadphonesIcon, Speaker, Radio, Tv, Gamepad, Joystick, Mouse, Keyboard, Printer, Scan as Scanner, HardDrive, Usb, Bluetooth, WifiOff, Airplay, Cast, Chrome as Chromecast, AppleIcon, CuboidIcon as AndroidIcon, AppWindowIcon as WindowsIcon, LinkIcon as LinuxIcon, ChromeIcon, BoxIcon as FirefoxIcon, PiIcon as SafariIcon, BadgeIcon as EdgeIcon, CameraIcon as OperaIcon, SaveIcon as BraveIcon, BoldIcon as VivaldIcon, TorusIcon as TorIcon, OptionIcon as OnionIcon, BanIcon as VpnIcon, TrophyIcon as ProxyIcon, BellIcon as FirewallIcon, TorusIcon as AntivirusIcon, ShareIcon as MalwareIcon, ShareIcon as SpywareIcon, ShareIcon as AdwareIcon, ShareIcon as RansomwareIcon, BanIcon as TrojanIcon, TorusIcon as VirusIcon, FormInputIcon as WormIcon, BotIcon as RootkitIcon, CloverIcon as KeyloggerIcon, HeadingIcon as PhishingIcon, HeadingIcon as SpoofingIcon, HeadingIcon as SniffingIcon, HeadingIcon as HijackingIcon, CrossIcon as DdosIcon, RouteIcon as BruteForceIcon, InspectionPanelIcon as SqlInjectionIcon, RssIcon as XssIcon, BeefIcon as CsrfIcon, GemIcon as MitmIcon, ShoppingBagIcon as EavesdroppingIcon, FingerprintIcon as SocialEngineeringIcon, SettingsIcon as PretextingIcon, HeadingIcon as BaitingIcon, EuroIcon as QuidProQuoIcon, MailWarningIcon as TailgatingIcon, PoundSterlingIcon as DumpsterDivingIcon, ShoppingBagIcon as ShoulderSurfingIcon, PiggyBankIcon as PiggybackingIcon, RadiationIcon as ImpersonationIcon, PresentationIcon as ElicitationIcon, NavigationIcon as InterrogationIcon, OptionIcon as InterceptionIcon, AmbulanceIcon as SurveillanceIcon, ReceiptSwissFrancIcon as ReconnaissanceIcon, FootprintsIcon as FootprintingIcon, ScalingIcon as ScanningIcon, IterationCwIcon as EnumerationIcon, AccessibilityIcon as VulnerabilityAssessmentIcon, PresentationIcon as PenetrationTestingIcon, PresentationIcon as ExploitationIcon, PresentationIcon as PostExploitationIcon, NavigationIcon as PrivilegeEscalationIcon, FenceIcon as PersistenceIcon, PresentationIcon as DefenseEvasionIcon, ParenthesesIcon as CredentialAccessIcon, DiscIcon as DiscoveryIcon, PercentIcon as LateralMovementIcon, TextSelectionIcon as CollectionIcon, CommandIcon as CommandAndControlIcon, RadiationIcon as ExfiltrationIcon, ImportIcon as ImpactIcon } from 'lucide-react';
import axios from 'axios';

// Welcome Screen Component
const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const welcomeSteps = [
    { text: "Welcome to", highlight: "MetaHire", delay: 1000 },
    { text: "The Future of", highlight: "Career Growth", delay: 1500 },
    { text: "Powered by", highlight: "AI & Web3", delay: 2000 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < welcomeSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 500);
        }, 2000);
      }
    }, welcomeSteps[currentStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center space-y-8 relative z-10">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
          <Zap className="w-12 h-12 text-white" />
        </div>
        
        <div className="space-y-4">
          {welcomeSteps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${
                index <= currentStep ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {step.text}{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {step.highlight}
                </span>
              </h1>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {welcomeSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index <= currentStep ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 3D Avatar Component
const Avatar3D = ({ name, role, company, size = 'md' }: { name: string; role: string; company: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const colors = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-pink-500 to-red-600',
    'from-yellow-500 to-orange-600',
    'from-indigo-500 to-blue-600',
    'from-purple-500 to-pink-600'
  ];

  const colorIndex = name.length % colors.length;

  return (
    <div className="group cursor-pointer">
      <div className={`${sizeClasses[size]} bg-gradient-to-r ${colors[colorIndex]} rounded-full flex items-center justify-center text-white font-bold text-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl`}>
        {name.split(' ').map(n => n[0]).join('').toUpperCase()}
      </div>
      {size !== 'sm' && (
        <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-semibold text-gray-800 dark:text-white">{name}</p>
          <p className="text-xs text-gray-600 dark:text-gray-300">{role}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{company}</p>
        </div>
      )}
    </div>
  );
};

// Resume Upload Modal
const ResumeUploadModal = ({ isOpen, onClose, darkMode }: { isOpen: boolean; onClose: () => void; darkMode: boolean }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const fileTypes = [
    { type: 'PDF', icon: <FileText className="w-6 h-6" />, color: 'from-red-500 to-red-600' },
    { type: 'DOC', icon: <FileText className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
    { type: 'DOCX', icon: <FileText className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
    { type: 'TXT', icon: <FileText className="w-6 h-6" />, color: 'from-gray-500 to-gray-600' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className={`w-full max-w-2xl mx-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} ${darkMode ? 'bg-gray-900/20' : 'bg-white/20'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Upload Your Resume
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {!uploadComplete ? (
          <>
            <div
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-white" />
              </div>
              
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Drag & Drop Your Resume
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                or click to browse files
              </p>
              
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Choose File
              </label>
            </div>

            <div className="mt-6">
              <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Supported file types:
              </p>
              <div className="grid grid-cols-4 gap-3">
                {fileTypes.map((fileType, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${fileType.color} rounded-lg p-3 flex flex-col items-center text-white transform transition-all duration-300 hover:scale-105`}
                  >
                    {fileType.icon}
                    <span className="text-xs mt-1 font-semibold">{fileType.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {isUploading && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Uploading...
                  </span>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {uploadProgress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center animate-bounce">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Resume Uploaded Successfully!
            </h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              AI is analyzing your skills and matching you with opportunities...
            </p>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Move AuthModal outside of App component
const AuthModal = ({
  showAuth,
  setShowAuth,
  authMode,
  setAuthMode,
  darkMode,
  funFacts,
  currentFactIndex,
  handleLogin,
  handleRegister,
  loginError,
  registrationError
}: {
  showAuth: boolean;
  setShowAuth: (show: boolean) => void;
  authMode: 'signin' | 'signup';
  setAuthMode: (mode: 'signin' | 'signup') => void;
  darkMode: boolean;
  funFacts: string[];
  currentFactIndex: number;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleRegister: (name: string, email: string, password: string) => Promise<void>;
  loginError: string;
  registrationError: string;
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (showAuth) {
      setEmail('');
      setPassword('');
      setFullName('');
      setConfirmPassword('');
    }
  }, [showAuth]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300 ${showAuth ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`w-full max-w-6xl h-[600px] mx-4 relative transform transition-all duration-500 ${showAuth ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="flex h-full rounded-2xl overflow-hidden shadow-2xl">
          <div className={`w-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 flex flex-col justify-center relative ${darkMode ? 'bg-gray-900/20' : 'bg-white/20'}`}>
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="mb-8">
              <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {authMode === 'signin' ? 'Welcome Back' : 'Join MetaHire'}
              </h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {authMode === 'signin' ? 'Sign in to your account' : 'Create your AI-powered profile'}
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={async e => {
                e.preventDefault();
                if (authMode === 'signin') {
                  await handleLogin(email, password);
                } else {
                  // handle signup here
                  await handleRegister(fullName, email, password);
                }
              }}
            >
              {authMode === 'signup' && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className={`w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                  />
                </div>
              )}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={`w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className={`w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                />
              </div>
              {authMode === 'signup' && (
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className={`w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                  />
                </div>
              )}
              {authMode === 'signin' && loginError && (
                <div className="text-red-500 text-sm text-center">{loginError}</div>
              )}
              {authMode === 'signup' && registrationError && (
                <div className="text-red-500 text-sm text-center">{registrationError}</div>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {authMode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  Google
                </button>
                <button
                  type="button"
                  className={`flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  GitHub
                </button>
                <button
                  type="button"
                  className={`flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  <Wallet size={16} />
                </button>
              </div>
              <p className={`text-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {authMode === 'signin' ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                  className="ml-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {authMode === 'signin' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </form>
          </div>

          <div className={`w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden ${darkMode ? 'from-blue-800 via-purple-800 to-pink-800' : ''}`}>
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Removed FloatingElements and animation from AuthModal side panel */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <Bot size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Career Growth</h3>
                <div className="h-16 flex items-center justify-center">
                  <p className="text-lg text-center">
                    {funFacts[currentFactIndex]}
                  </p>
                </div>
                {/* Removed animated dots */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Add login error state
  const [loginError, setLoginError] = useState('');
  const [RegistrationError, setRegistrationError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ id: string; name: string; email: string } | null>(null);

  // Check authentication status
  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsAuthenticated(true);
        setCurrentUser(res.data);
      } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setCurrentUser(null);
      }
    }
  };

  // Login handler
  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
      setCurrentUser(user);
      setLoginError('');
      console.log('Login success');
      console.log({'token': token})
      setPassword('');
      setEmail('');
      setSuccess(`Welcome, ${user.name}!`);
      setShowAuth(false); // close modal on success
    } catch (err: any) {
      setLoginError(err.response?.data?.msg || err.message || 'Login failed');
      console.error('Login failed:', err.response?.data?.msg || err.message);
    }
  };

  const handleRegister = async (name: string,email: string, password: string) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name, 
        email,
        password,
      });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
      setCurrentUser(user);
      setRegistrationError('');
      console.log('Registration success');
      console.log({'token': token})
      setFullName('');
      setEmail('');
      setPassword('');
      setSuccess(`Welcome, ${user.name}!`);
      setShowAuth(false); // close modal on success
    } catch (err: any) {
      setRegistrationError(err.response?.data?.msg || err.message || 'Registration failed');
      console.error('Registration failed:', err.response?.data?.msg || err.message);
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage('home');
  };

  const funFacts = [
    "95% of AI jobs didn't exist 5 years ago.",
    "Your resume can now talk to recruiters... literally.",
    "Web3 is creating 10,000+ new jobs monthly.",
    "AI matches talent 10x faster than traditional methods.",
    "Blockchain developers earn 40% more than traditional devs.",
    "Remote AI jobs increased by 300% in 2024."
  ];

  const techDomains = [
    { id: 'all', name: 'All Domains', icon: <Globe className="w-5 h-5" />, color: 'from-gray-500 to-gray-600' },
    { id: 'ai-ml', name: 'AI/ML', icon: <Bot className="w-5 h-5" />, color: 'from-blue-500 to-purple-600' },
    { id: 'web-dev', name: 'Web Development', icon: <Code className="w-5 h-5" />, color: 'from-green-500 to-teal-600' },
    { id: 'mobile', name: 'Mobile Development', icon: <Smartphone className="w-5 h-5" />, color: 'from-pink-500 to-red-600' },
    { id: 'data-science', name: 'Data Science', icon: <BarChart className="w-5 h-5" />, color: 'from-yellow-500 to-orange-600' },
    { id: 'devops', name: 'DevOps', icon: <Cloud className="w-5 h-5" />, color: 'from-indigo-500 to-blue-600' },
    { id: 'blockchain', name: 'Blockchain', icon: <Wallet className="w-5 h-5" />, color: 'from-purple-500 to-pink-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-pink-600' },
    { id: 'ui-ux', name: 'UI/UX Design', icon: <Palette className="w-5 h-5" />, color: 'from-teal-500 to-cyan-600' }
  ];

  const companies = [
    { name: 'Google', employees: 156000, domain: 'ai-ml', logo: '🔍', description: 'Search, AI, Cloud Computing' },
    { name: 'Microsoft', employees: 221000, domain: 'ai-ml', logo: '🪟', description: 'Cloud, AI, Enterprise Software' },
    { name: 'Apple', employees: 164000, domain: 'mobile', logo: '🍎', description: 'Consumer Electronics, Software' },
    { name: 'Meta', employees: 86000, domain: 'web-dev', logo: '📘', description: 'Social Media, VR/AR, AI' },
    { name: 'Amazon', employees: 1540000, domain: 'devops', logo: '📦', description: 'E-commerce, Cloud, AI' },
    { name: 'Netflix', employees: 12800, domain: 'data-science', logo: '🎬', description: 'Streaming, Content, Analytics' },
    { name: 'Tesla', employees: 127855, domain: 'ai-ml', logo: '⚡', description: 'Electric Vehicles, AI, Energy' },
    { name: 'Spotify', employees: 9800, domain: 'data-science', logo: '🎵', description: 'Music Streaming, ML, Audio' },
    { name: 'Uber', employees: 32800, domain: 'mobile', logo: '🚗', description: 'Ride-sharing, Delivery, Mobility' },
    { name: 'Airbnb', employees: 6800, domain: 'web-dev', logo: '🏠', description: 'Travel, Hospitality, Platform' },
    { name: 'Coinbase', employees: 4900, domain: 'blockchain', logo: '₿', description: 'Cryptocurrency, Trading, Web3' },
    { name: 'OpenAI', employees: 1500, domain: 'ai-ml', logo: '🤖', description: 'Artificial Intelligence, GPT, Research' },
    { name: 'Stripe', employees: 8000, domain: 'web-dev', logo: '💳', description: 'Payments, Fintech, APIs' },
    { name: 'Figma', employees: 1200, domain: 'ui-ux', logo: '🎨', description: 'Design Tools, Collaboration' },
    { name: 'Notion', employees: 500, domain: 'web-dev', logo: '📝', description: 'Productivity, Collaboration, Notes' },
    { name: 'Discord', employees: 600, domain: 'web-dev', logo: '🎮', description: 'Communication, Gaming, Community' },
    { name: 'Shopify', employees: 12000, domain: 'web-dev', logo: '🛍️', description: 'E-commerce, Retail, Platform' },
    { name: 'Zoom', employees: 8400, domain: 'web-dev', logo: '📹', description: 'Video Conferencing, Communication' },
    { name: 'Slack', employees: 2500, domain: 'web-dev', logo: '💬', description: 'Team Communication, Productivity' },
    { name: 'CrowdStrike', employees: 8400, domain: 'cybersecurity', logo: '🛡️', description: 'Cybersecurity, Threat Intelligence' }
  ];

  const jobs = [
    // AI/ML Jobs
    { id: 1, title: 'Senior AI Engineer', company: 'Google', location: 'Mountain View, CA', salary: '$180k-250k', type: 'Full-time', domain: 'ai-ml', posted: '2 days ago', description: 'Build next-generation AI systems', skills: ['Python', 'TensorFlow', 'PyTorch', 'ML'], applicants: 234 },
    { id: 2, title: 'Machine Learning Scientist', company: 'Microsoft', location: 'Seattle, WA', salary: '$170k-240k', type: 'Full-time', domain: 'ai-ml', posted: '1 day ago', description: 'Research and develop ML algorithms', skills: ['Python', 'R', 'Statistics', 'Deep Learning'], applicants: 189 },
    { id: 3, title: 'AI Research Engineer', company: 'OpenAI', location: 'San Francisco, CA', salary: '$200k-300k', type: 'Full-time', domain: 'ai-ml', posted: '3 days ago', description: 'Advance the field of artificial intelligence', skills: ['Python', 'PyTorch', 'Research', 'NLP'], applicants: 456 },
    { id: 4, title: 'Computer Vision Engineer', company: 'Tesla', location: 'Palo Alto, CA', salary: '$160k-220k', type: 'Full-time', domain: 'ai-ml', posted: '1 week ago', description: 'Develop autonomous driving systems', skills: ['Python', 'OpenCV', 'Deep Learning', 'C++'], applicants: 312 },
    { id: 5, title: 'NLP Engineer', company: 'Meta', location: 'Menlo Park, CA', salary: '$150k-210k', type: 'Full-time', domain: 'ai-ml', posted: '4 days ago', description: 'Build language understanding systems', skills: ['Python', 'NLP', 'Transformers', 'PyTorch'], applicants: 278 },
    
    // Web Development Jobs
    { id: 6, title: 'Senior Full Stack Developer', company: 'Stripe', location: 'San Francisco, CA', salary: '$140k-200k', type: 'Full-time', domain: 'web-dev', posted: '2 days ago', description: 'Build scalable payment systems', skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'], applicants: 167 },
    { id: 7, title: 'Frontend Engineer', company: 'Airbnb', location: 'San Francisco, CA', salary: '$130k-180k', type: 'Full-time', domain: 'web-dev', posted: '1 day ago', description: 'Create beautiful user experiences', skills: ['React', 'JavaScript', 'CSS', 'GraphQL'], applicants: 203 },
    { id: 8, title: 'Backend Engineer', company: 'Uber', location: 'San Francisco, CA', salary: '$135k-190k', type: 'Full-time', domain: 'web-dev', posted: '3 days ago', description: 'Build scalable backend systems', skills: ['Go', 'Python', 'Kubernetes', 'Microservices'], applicants: 145 },
    { id: 9, title: 'React Developer', company: 'Netflix', location: 'Los Gatos, CA', salary: '$125k-175k', type: 'Full-time', domain: 'web-dev', posted: '5 days ago', description: 'Develop streaming platform features', skills: ['React', 'Redux', 'JavaScript', 'Node.js'], applicants: 289 },
    { id: 10, title: 'DevOps Engineer', company: 'Amazon', location: 'Seattle, WA', salary: '$120k-170k', type: 'Full-time', domain: 'devops', posted: '1 week ago', description: 'Manage cloud infrastructure', skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'], applicants: 198 },
    
    // Mobile Development Jobs
    { id: 11, title: 'iOS Developer', company: 'Apple', location: 'Cupertino, CA', salary: '$140k-200k', type: 'Full-time', domain: 'mobile', posted: '2 days ago', description: 'Build iOS applications', skills: ['Swift', 'iOS', 'Xcode', 'UIKit'], applicants: 234 },
    { id: 12, title: 'Android Developer', company: 'Google', location: 'Mountain View, CA', salary: '$135k-195k', type: 'Full-time', domain: 'mobile', posted: '4 days ago', description: 'Develop Android applications', skills: ['Kotlin', 'Android', 'Java', 'Firebase'], applicants: 187 },
    { id: 13, title: 'React Native Developer', company: 'Meta', location: 'Menlo Park, CA', salary: '$130k-180k', type: 'Full-time', domain: 'mobile', posted: '1 day ago', description: 'Build cross-platform mobile apps', skills: ['React Native', 'JavaScript', 'Redux', 'GraphQL'], applicants: 156 },
    { id: 14, title: 'Flutter Developer', company: 'Uber', location: 'San Francisco, CA', salary: '$125k-175k', type: 'Full-time', domain: 'mobile', posted: '6 days ago', description: 'Create mobile experiences with Flutter', skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs'], applicants: 143 },
    { id: 15, title: 'Mobile App Architect', company: 'Spotify', location: 'New York, NY', salary: '$150k-220k', type: 'Full-time', domain: 'mobile', posted: '3 days ago', description: 'Design mobile app architecture', skills: ['iOS', 'Android', 'Architecture', 'Leadership'], applicants: 98 },
    
    // Data Science Jobs
    { id: 16, title: 'Senior Data Scientist', company: 'Netflix', location: 'Los Gatos, CA', salary: '$145k-205k', type: 'Full-time', domain: 'data-science', posted: '1 day ago', description: 'Analyze user behavior and content', skills: ['Python', 'SQL', 'Machine Learning', 'Statistics'], applicants: 267 },
    { id: 17, title: 'Data Engineer', company: 'Spotify', location: 'New York, NY', salary: '$130k-180k', type: 'Full-time', domain: 'data-science', posted: '2 days ago', description: 'Build data pipelines and infrastructure', skills: ['Python', 'Spark', 'Kafka', 'SQL'], applicants: 189 },
    { id: 18, title: 'Analytics Engineer', company: 'Airbnb', location: 'San Francisco, CA', salary: '$125k-175k', type: 'Full-time', domain: 'data-science', posted: '4 days ago', description: 'Transform data into insights', skills: ['SQL', 'dbt', 'Python', 'Tableau'], applicants: 156 },
    { id: 19, title: 'Research Scientist', company: 'Google', location: 'Mountain View, CA', salary: '$160k-230k', type: 'Full-time', domain: 'data-science', posted: '1 week ago', description: 'Conduct cutting-edge research', skills: ['Python', 'R', 'Statistics', 'Research'], applicants: 234 },
    { id: 20, title: 'Business Intelligence Analyst', company: 'Amazon', location: 'Seattle, WA', salary: '$110k-150k', type: 'Full-time', domain: 'data-science', posted: '5 days ago', description: 'Drive business decisions with data', skills: ['SQL', 'Tableau', 'Excel', 'Statistics'], applicants: 178 },
    
    // Blockchain Jobs
    { id: 21, title: 'Blockchain Developer', company: 'Coinbase', location: 'San Francisco, CA', salary: '$140k-200k', type: 'Full-time', domain: 'blockchain', posted: '2 days ago', description: 'Build decentralized applications', skills: ['Solidity', 'Web3', 'Ethereum', 'JavaScript'], applicants: 123 },
    { id: 22, title: 'Smart Contract Engineer', company: 'OpenSea', location: 'New York, NY', salary: '$135k-195k', type: 'Full-time', domain: 'blockchain', posted: '3 days ago', description: 'Develop smart contracts for NFTs', skills: ['Solidity', 'Ethereum', 'Web3', 'DeFi'], applicants: 98 },
    { id: 23, title: 'DeFi Protocol Developer', company: 'Uniswap', location: 'Remote', salary: '$150k-220k', type: 'Full-time', domain: 'blockchain', posted: '1 day ago', description: 'Build DeFi protocols', skills: ['Solidity', 'DeFi', 'Ethereum', 'TypeScript'], applicants: 87 },
    { id: 24, title: 'Web3 Frontend Developer', company: 'MetaMask', location: 'Remote', salary: '$125k-175k', type: 'Full-time', domain: 'blockchain', posted: '4 days ago', description: 'Create Web3 user interfaces', skills: ['React', 'Web3.js', 'Ethereum', 'JavaScript'], applicants: 145 },
    { id: 25, title: 'Blockchain Security Engineer', company: 'Chainlink', location: 'Remote', salary: '$160k-240k', type: 'Full-time', domain: 'blockchain', posted: '6 days ago', description: 'Secure blockchain protocols', skills: ['Solidity', 'Security', 'Auditing', 'Cryptography'], applicants: 76 },
    
    // UI/UX Design Jobs
    { id: 26, title: 'Senior UX Designer', company: 'Figma', location: 'San Francisco, CA', salary: '$130k-180k', type: 'Full-time', domain: 'ui-ux', posted: '1 day ago', description: 'Design intuitive user experiences', skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'], applicants: 234 },
    { id: 27, title: 'Product Designer', company: 'Notion', location: 'San Francisco, CA', salary: '$125k-175k', type: 'Full-time', domain: 'ui-ux', posted: '3 days ago', description: 'Shape product experiences', skills: ['Figma', 'Product Design', 'User Research', 'Prototyping'], applicants: 189 },
    { id: 28, title: 'UI Designer', company: 'Discord', location: 'San Francisco, CA', salary: '$115k-160k', type: 'Full-time', domain: 'ui-ux', posted: '2 days ago', description: 'Create beautiful interfaces', skills: ['Figma', 'UI Design', 'Design Systems', 'Illustration'], applicants: 167 },
    { id: 29, title: 'Design System Lead', company: 'Shopify', location: 'Toronto, ON', salary: '$140k-200k', type: 'Full-time', domain: 'ui-ux', posted: '5 days ago', description: 'Lead design system initiatives', skills: ['Design Systems', 'Figma', 'Leadership', 'Frontend'], applicants: 98 },
    { id: 30, title: 'UX Researcher', company: 'Zoom', location: 'San Jose, CA', salary: '$120k-170k', type: 'Full-time', domain: 'ui-ux', posted: '1 week ago', description: 'Conduct user research studies', skills: ['User Research', 'Analytics', 'Psychology', 'Statistics'], applicants: 145 },
    
    // Cybersecurity Jobs
    { id: 31, title: 'Security Engineer', company: 'CrowdStrike', location: 'Austin, TX', salary: '$130k-180k', type: 'Full-time', domain: 'cybersecurity', posted: '2 days ago', description: 'Protect against cyber threats', skills: ['Security', 'Python', 'Incident Response', 'SIEM'], applicants: 156 },
    { id: 32, title: 'Penetration Tester', company: 'Rapid7', location: 'Boston, MA', salary: '$120k-170k', type: 'Full-time', domain: 'cybersecurity', posted: '4 days ago', description: 'Test security vulnerabilities', skills: ['Penetration Testing', 'Ethical Hacking', 'Security', 'Linux'], applicants: 123 },
    { id: 33, title: 'Security Architect', company: 'Palo Alto Networks', location: 'Santa Clara, CA', salary: '$150k-220k', type: 'Full-time', domain: 'cybersecurity', posted: '1 day ago', description: 'Design secure architectures', skills: ['Security Architecture', 'Cloud Security', 'Risk Assessment', 'Compliance'], applicants: 87 },
    { id: 34, title: 'SOC Analyst', company: 'FireEye', location: 'Milpitas, CA', salary: '$90k-130k', type: 'Full-time', domain: 'cybersecurity', posted: '3 days ago', description: 'Monitor security operations', skills: ['SIEM', 'Incident Response', 'Threat Hunting', 'Security'], applicants: 198 },
    { id: 35, title: 'Cloud Security Engineer', company: 'Microsoft', location: 'Redmond, WA', salary: '$140k-200k', type: 'Full-time', domain: 'cybersecurity', posted: '6 days ago', description: 'Secure cloud infrastructure', skills: ['Cloud Security', 'Azure', 'DevSecOps', 'Compliance'], applicants: 167 },
    
    // DevOps Jobs
    { id: 36, title: 'DevOps Engineer', company: 'Amazon', location: 'Seattle, WA', salary: '$125k-175k', type: 'Full-time', domain: 'devops', posted: '1 day ago', description: 'Automate infrastructure and deployments', skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'], applicants: 234 },
    { id: 37, title: 'Site Reliability Engineer', company: 'Google', location: 'Mountain View, CA', salary: '$140k-200k', type: 'Full-time', domain: 'devops', posted: '2 days ago', description: 'Ensure system reliability and performance', skills: ['SRE', 'Monitoring', 'Automation', 'Linux'], applicants: 189 },
    { id: 38, title: 'Platform Engineer', company: 'Uber', location: 'San Francisco, CA', salary: '$135k-190k', type: 'Full-time', domain: 'devops', posted: '4 days ago', description: 'Build developer platforms', skills: ['Kubernetes', 'Go', 'Platform Engineering', 'CI/CD'], applicants: 156 },
    { id: 39, title: 'Cloud Engineer', company: 'Netflix', location: 'Los Gatos, CA', salary: '$130k-180k', type: 'Full-time', domain: 'devops', posted: '3 days ago', description: 'Manage cloud infrastructure', skills: ['AWS', 'Infrastructure as Code', 'Monitoring', 'Automation'], applicants: 167 },
    { id: 40, title: 'Infrastructure Engineer', company: 'Stripe', location: 'San Francisco, CA', salary: '$140k-200k', type: 'Full-time', domain: 'devops', posted: '5 days ago', description: 'Scale payment infrastructure', skills: ['Infrastructure', 'Monitoring', 'Automation', 'Security'], applicants: 145 }
  ];

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Protected route handler
  const handleProtectedRoute = (page: string) => {
    if (!isAuthenticated) {
      setShowAuth(true);
      setAuthMode('signin');
      return;
    }
    setCurrentPage(page);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesDomain = selectedDomain === 'all' || job.domain === selectedDomain;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  const filteredCompanies = companies.filter(company => 
    selectedDomain === 'all' || company.domain === selectedDomain
  );

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-60`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  const renderHomePage = () => (
    <>
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              <div className={`w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse`} />
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-6">
                <Lightning className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Now with AI-Powered Matching
                </span>
              </div>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up ${darkMode ? 'text-white' : 'text-gray-800'}`} style={{ animationDelay: '0.2s' }}>
              The Future of
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Career Growth
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '0.4s' }}>
              AI-powered job matching, Web3 payments, and next-gen networking in one revolutionary platform
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => setShowAuth(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
              >
                <span>Start Your Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 group ${
                darkMode 
                  ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                  : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
              }`}>
                <span className="flex items-center space-x-2">
                  <Play size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </span>
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {[
                { number: '50K+', label: 'Active Jobs', icon: <Briefcase className="w-6 h-6" /> },
                { number: '10K+', label: 'Companies', icon: <Building className="w-6 h-6" /> },
                { number: '100K+', label: 'Professionals', icon: <Users className="w-6 h-6" /> },
                { number: '95%', label: 'Match Rate', icon: <Target className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-900/20' : 'bg-white/20'}`}>
                  <div className="flex justify-center mb-2 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Powered by Next-Gen Technology
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Experience the future of career growth with our cutting-edge AI and Web3 integration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-8 h-8" />,
                title: "AI-Powered Matching",
                description: "Advanced algorithms match your skills with perfect opportunities using machine learning",
                color: "from-blue-500 to-cyan-500",
                features: ["Smart Resume Analysis", "Skill Gap Detection", "Career Path Prediction"]
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Web3 Payments",
                description: "Secure, instant payments with cryptocurrency integration and smart contracts",
                color: "from-purple-500 to-pink-500",
                features: ["Instant Payments", "Smart Contracts", "Multi-Chain Support"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global Network",
                description: "Connect with professionals worldwide in your field through AI-curated networking",
                color: "from-green-500 to-teal-500",
                features: ["Smart Networking", "Industry Insights", "Mentorship Matching"]
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Smart Profiles",
                description: "AI-generated profiles that highlight your best qualities and achievements",
                color: "from-yellow-500 to-orange-500",
                features: ["Auto-Generated Content", "Skill Highlighting", "Achievement Tracking"]
              },
              {
                icon: <Lightning className="w-8 h-8" />,
                title: "Instant Notifications",
                description: "Real-time alerts for new opportunities and connections with smart filtering",
                color: "from-red-500 to-pink-500",
                features: ["Real-time Alerts", "Smart Filtering", "Priority Scoring"]
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Career Acceleration",
                description: "Fast-track your career with AI-driven insights and personalized recommendations",
                color: "from-indigo-500 to-purple-500",
                features: ["Growth Analytics", "Skill Recommendations", "Market Insights"]
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${
                  darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {feature.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className={`flex items-center space-x-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden ${darkMode ? 'bg-gray-900/20' : 'bg-white/20'}`}>
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Ready to Transform Your Career?
              </h2>
              <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Join thousands of professionals already using AI to accelerate their success
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => setShowAuth(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg group"
                >
                  <span className="flex items-center space-x-2">
                    <span>Get Started Free</span>
                    <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
                
                <button className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                    : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                }`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderJobsPage = () => (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Discover Your Next Opportunity
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            AI-powered job matching across all tech domains
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs, companies, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${darkMode ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'}`}
            />
          </div>

          {/* Domain Filter */}
          <div className="flex flex-wrap gap-3">
            {techDomains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedDomain === domain.id
                    ? `bg-gradient-to-r ${domain.color} text-white shadow-lg`
                    : `bg-white/10 backdrop-blur-xl border border-white/20 ${darkMode ? 'text-white hover:bg-white/20' : 'text-gray-800 hover:bg-white/30'}`
                }`}
              >
                {domain.icon}
                <span>{domain.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {job.title}
                  </h3>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {job.company}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{job.posted}</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                    <Heart size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {job.salary}
                  </p>
                  <p className="text-xs text-gray-500">
                    {job.applicants} applicants
                  </p>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Apply</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-white" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              No jobs found
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Try adjusting your search criteria or domain filter
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderNetworkPage = () => (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Professional Network
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Connect with top companies and professionals in your field
          </p>
        </div>

        {/* Domain Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {techDomains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedDomain === domain.id
                    ? `bg-gradient-to-r ${domain.color} text-white shadow-lg`
                    : `bg-white/10 backdrop-blur-xl border border-white/20 ${darkMode ? 'text-white hover:bg-white/20' : 'text-gray-800 hover:bg-white/30'}`
                }`}
              >
                {domain.icon}
                <span>{domain.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Companies Section */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Top Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanies.map((company, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{company.logo}</div>
                  <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {company.name}
                  </h3>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {company.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    {company.employees.toLocaleString()} employees
                  </p>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm">
                      Follow
                    </button>
                    <button className={`px-4 py-2 rounded-lg font-semibold border transition-all duration-300 transform hover:scale-105 text-sm ${
                      darkMode 
                        ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                        : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                    }`}>
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* People Section */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Connect with Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'Sarah Chen', role: 'AI Engineer', company: 'Google', domain: 'ai-ml' },
              { name: 'Marcus Johnson', role: 'Full Stack Developer', company: 'Stripe', domain: 'web-dev' },
              { name: 'Elena Rodriguez', role: 'iOS Developer', company: 'Apple', domain: 'mobile' },
              { name: 'David Kim', role: 'Data Scientist', company: 'Netflix', domain: 'data-science' },
              { name: 'Alex Thompson', role: 'DevOps Engineer', company: 'Amazon', domain: 'devops' },
              { name: 'Maya Patel', role: 'Blockchain Developer', company: 'Coinbase', domain: 'blockchain' },
              { name: 'James Wilson', role: 'Security Engineer', company: 'CrowdStrike', domain: 'cybersecurity' },
              { name: 'Lisa Zhang', role: 'UX Designer', company: 'Figma', domain: 'ui-ux' },
              { name: 'Ryan O\'Connor', role: 'ML Researcher', company: 'OpenAI', domain: 'ai-ml' },
              { name: 'Priya Sharma', role: 'Frontend Engineer', company: 'Airbnb', domain: 'web-dev' },
              { name: 'Carlos Mendez', role: 'Android Developer', company: 'Uber', domain: 'mobile' },
              { name: 'Sophie Laurent', role: 'Data Engineer', company: 'Spotify', domain: 'data-science' }
            ].filter(person => selectedDomain === 'all' || person.domain === selectedDomain).map((person, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <Avatar3D name={person.name} role={person.role} company={person.company} size="lg" />
                  <div className="mt-4 space-y-2">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm flex items-center justify-center space-x-2">
                      <UserPlus size={16} />
                      <span>Connect</span>
                    </button>
                    <button className={`w-full px-4 py-2 rounded-lg font-semibold border transition-all duration-300 transform hover:scale-105 text-sm ${
                      darkMode 
                        ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                        : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                    }`}>
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAIMatchPage = () => (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            AI Career Matching
          </h1>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let AI analyze your skills and find perfect career opportunities
          </p>
          
          <button
            onClick={() => setShowResumeModal(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
          >
            <Upload className="w-5 h-5" />
            <span>Upload Resume for AI Analysis</span>
          </button>
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Bot className="w-8 h-8" />,
              title: "Smart Resume Analysis",
              description: "AI extracts and analyzes your skills, experience, and achievements",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Precision Matching",
              description: "Advanced algorithms match you with jobs based on compatibility scores",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Career Insights",
              description: "Get personalized recommendations for skill development and growth",
              color: "from-green-500 to-teal-500"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {feature.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Match Results */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Your AI-Powered Matches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { job: 'Senior AI Engineer', company: 'Google', match: 95, skills: ['Python', 'TensorFlow', 'ML'], salary: '$180k-250k' },
              { job: 'Machine Learning Scientist', company: 'Microsoft', match: 92, skills: ['Python', 'PyTorch', 'Research'], salary: '$170k-240k' },
              { job: 'AI Research Engineer', company: 'OpenAI', match: 89, skills: ['Python', 'Deep Learning', 'NLP'], salary: '$200k-300k' },
              { job: 'Computer Vision Engineer', company: 'Tesla', match: 87, skills: ['Python', 'OpenCV', 'C++'], salary: '$160k-220k' }
            ].map((match, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {match.job}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {match.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${match.match >= 90 ? 'text-green-400' : match.match >= 80 ? 'text-yellow-400' : 'text-orange-400'}`}>
                      {match.match}%
                    </div>
                    <div className="text-xs text-gray-500">Match</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        match.match >= 90 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                        match.match >= 80 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                        'bg-gradient-to-r from-orange-400 to-orange-500'
                      }`}
                      style={{ width: `${match.match}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {match.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {match.salary}
                  </span>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Analysis */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            AI Skills Analysis
          </h2>
          <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 ${darkMode ? 'bg-gray-900/20' : 'bg-white/20'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Your Top Skills
                </h3>
                <div className="space-y-3">
                  {[
                    { skill: 'Python', level: 95 },
                    { skill: 'Machine Learning', level: 90 },
                    { skill: 'TensorFlow', level: 85 },
                    { skill: 'Data Analysis', level: 88 },
                    { skill: 'Deep Learning', level: 82 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {item.skill}
                        </span>
                        <span className="text-sm text-gray-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Recommended Skills to Learn
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: 'PyTorch', demand: 'High', growth: '+25%' },
                    { skill: 'MLOps', demand: 'Very High', growth: '+40%' },
                    { skill: 'Computer Vision', demand: 'High', growth: '+30%' },
                    { skill: 'NLP', demand: 'Very High', growth: '+35%' }
                  ].map((item, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800/30' : 'border-gray-300 bg-white/30'}`}>
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {item.skill}
                        </span>
                        <div className="flex space-x-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.demand === 'Very High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {item.demand}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                            {item.growth}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWeb3Page = () => (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Web3 Career Hub
          </h1>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore blockchain careers, earn crypto rewards, and build your decentralized future
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Wallet className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>
            <button className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
              darkMode 
                ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            }`}>
              Learn Web3
            </button>
          </div>
        </div>

        {/* Web3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Coins className="w-8 h-8" />,
              title: "Crypto Payments",
              description: "Get paid instantly in cryptocurrency for your work and achievements",
              color: "from-yellow-500 to-orange-500",
              features: ["Instant Payments", "Multi-Chain Support", "Low Fees"]
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Smart Contracts",
              description: "Secure, automated contracts that execute when conditions are met",
              color: "from-green-500 to-teal-500",
              features: ["Automated Execution", "Transparent Terms", "Dispute Resolution"]
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "NFT Certificates",
              description: "Earn verifiable NFT certificates for completed projects and skills",
              color: "from-purple-500 to-pink-500",
              features: ["Skill Verification", "Portfolio Showcase", "Transferable Assets"]
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "DAO Governance",
              description: "Participate in platform governance and earn voting tokens",
              color: "from-blue-500 to-cyan-500",
              features: ["Community Voting", "Proposal Creation", "Token Rewards"]
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "DeFi Integration",
              description: "Stake your earnings, provide liquidity, and earn passive income",
              color: "from-indigo-500 to-purple-500",
              features: ["Yield Farming", "Liquidity Mining", "Staking Rewards"]
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Metaverse Jobs",
              description: "Find opportunities in virtual worlds and metaverse platforms",
              color: "from-pink-500 to-red-500",
              features: ["Virtual Worlds", "Avatar Design", "3D Development"]
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {feature.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className={`flex items-center space-x-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Blockchain Jobs */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Latest Blockchain Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.filter(job => job.domain === 'blockchain').slice(0, 4).map((job, index) => (
              <div
                key={job.id}
                className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {job.title}
                    </h3>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {job.company}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Coins size={14} />
                        <span>Crypto Pay</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">
                      {job.salary}
                    </div>
                    <div className="text-xs text-gray-500">+ Tokens</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Wallet size={16} />
                  <span>Apply with Wallet</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Token Economy */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            MetaHire Token Economy
          </h2>
          <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 ${darkMode ? 'bg-gray-900/20' : 'bg-white/20'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Earn Tokens
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Complete jobs, refer friends, and participate in the community to earn HIRE tokens
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Stake & Earn
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Stake your HIRE tokens to earn passive income and unlock premium features
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Governance Rights
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Use tokens to vote on platform decisions and shape the future of MetaHire
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Showcase */}
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Skill Certification NFTs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Solidity Master', rarity: 'Legendary', color: 'from-yellow-500 to-orange-500' },
              { name: 'DeFi Expert', rarity: 'Epic', color: 'from-purple-500 to-pink-500' },
              { name: 'Web3 Developer', rarity: 'Rare', color: 'from-blue-500 to-cyan-500' },
              { name: 'Smart Contract Auditor', rarity: 'Legendary', color: 'from-green-500 to-teal-500' }
            ].map((nft, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl group ${darkMode ? 'bg-gray-900/20 hover:bg-gray-800/30' : 'bg-white/20 hover:bg-white/30'}`}
              >
                <div className={`w-full h-32 bg-gradient-to-r ${nft.color} rounded-xl mb-4 flex items-center justify-center transform transition-all duration-300 group-hover:scale-105`}>
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {nft.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    nft.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                    nft.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {nft.rarity}
                  </span>
                  <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <FloatingElements />
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-xl border-b border-white/20 ${darkMode ? 'bg-gray-900/20' : 'bg-white/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                MetaHire
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleProtectedRoute('jobs')}
                className={`hover:text-blue-500 transition-colors ${currentPage === 'jobs' ? 'text-blue-500' : darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                Jobs
              </button>
              <button 
                onClick={() => handleProtectedRoute('network')}
                className={`hover:text-blue-500 transition-colors ${currentPage === 'network' ? 'text-blue-500' : darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                Network
              </button>
              <button 
                onClick={() => handleProtectedRoute('ai-match')}
                className={`hover:text-blue-500 transition-colors ${currentPage === 'ai-match' ? 'text-blue-500' : darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                AI Match
              </button>
              <button 
                onClick={() => handleProtectedRoute('web3')}
                className={`hover:text-blue-500 transition-colors ${currentPage === 'web3' ? 'text-blue-500' : darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                Web3
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-600'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className={`text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Welcome, {currentUser?.name || 'User'}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
              )}
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'jobs' && renderJobsPage()}
      {currentPage === 'network' && renderNetworkPage()}
      {currentPage === 'ai-match' && renderAIMatchPage()}
      {currentPage === 'web3' && renderWeb3Page()}

      {/* Enhanced Footer */}
      <footer className={`border-t border-white/20 py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900/20' : 'bg-white/20'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  MetaHire
                </span>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                The future of career growth powered by AI and Web3 technology.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter size={20} />, color: 'hover:text-blue-400' },
                  { icon: <Linkedin size={20} />, color: 'hover:text-blue-600' },
                  { icon: <Github size={20} />, color: 'hover:text-gray-600' },
                  { icon: <Mail size={20} />, color: 'hover:text-green-500' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`p-2 text-gray-400 transition-colors ${social.color}`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Platform
              </h3>
              <ul className="space-y-2">
                {['Find Jobs', 'Post Jobs', 'AI Matching', 'Web3 Features'].map((item, index) => (
                  <li key={index}>
                    <button className={`text-sm hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Resources
              </h3>
              <ul className="space-y-2">
                {['Documentation', 'API', 'Help Center', 'Community'].map((item, index) => (
                  <li key={index}>
                    <button className={`text-sm hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Company
              </h3>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Privacy', 'Terms'].map((item, index) => (
                  <li key={index}>
                    <button className={`text-sm hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className={`text-sm mb-4 md:mb-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 MetaHire. The future of career growth.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    All systems operational
                  </span>
                </div>
                <div className="flex space-x-4">
                  {[
                    { name: 'Sarah Chen', role: 'AI Engineer', company: 'Google' },
                    { name: 'Marcus Johnson', role: 'Full Stack Dev', company: 'Stripe' },
                    { name: 'Elena Rodriguez', role: 'iOS Developer', company: 'Apple' }
                  ].map((person, index) => (
                    <Avatar3D key={index} name={person.name} role={person.role} company={person.company} size="sm" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AuthModal
        showAuth={showAuth}
        setShowAuth={setShowAuth}
        authMode={authMode}
        setAuthMode={setAuthMode}
        darkMode={darkMode}
        funFacts={funFacts}
        currentFactIndex={currentFactIndex}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        loginError={loginError}
        registrationError={RegistrationError}
      />
      <ResumeUploadModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} darkMode={darkMode} />
    </div>
  );
}

export default App;