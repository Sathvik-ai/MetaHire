import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected network routes - require authentication
router.get('/network', authMiddleware, async (req, res) => {
  try {
    // Mock network data - in real app, this would come from database
    const companies = [
      { name: 'Google', employees: 156000, domain: 'ai-ml', logo: '🔍', description: 'Search, AI, Cloud Computing' },
      { name: 'Microsoft', employees: 221000, domain: 'ai-ml', logo: '🪟', description: 'Cloud, AI, Enterprise Software' },
      { name: 'Apple', employees: 164000, domain: 'mobile', logo: '🍎', description: 'Consumer Electronics, Software' },
      { name: 'Meta', employees: 86000, domain: 'web-dev', logo: '📘', description: 'Social Media, VR/AR, AI' },
      { name: 'Amazon', employees: 1540000, domain: 'devops', logo: '📦', description: 'E-commerce, Cloud, AI' }
    ];
    
    const professionals = [
      { id: 1, name: 'Sarah Chen', role: 'AI Engineer', company: 'Google', domain: 'ai-ml' },
      { id: 2, name: 'Marcus Johnson', role: 'Full Stack Developer', company: 'Stripe', domain: 'web-dev' },
      { id: 3, name: 'Elena Rodriguez', role: 'iOS Developer', company: 'Apple', domain: 'mobile' },
      { id: 4, name: 'David Kim', role: 'Data Scientist', company: 'Netflix', domain: 'data-science' },
      { id: 5, name: 'Alex Thompson', role: 'DevOps Engineer', company: 'Amazon', domain: 'devops' }
    ];
    
    res.json({ companies, professionals, user: req.user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

router.post('/connect', authMiddleware, async (req, res) => {
  try {
    const { targetUserId } = req.body;
    // Mock connection logic - in real app, save to database
    res.json({ msg: 'Connection request sent successfully', targetUserId, userId: req.user.id });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    // Return user profile data
    res.json({ user: req.user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;
