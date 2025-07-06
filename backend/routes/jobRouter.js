import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected job routes - require authentication
router.get('/', authMiddleware, async (req, res) => {
  try {
    // Mock job data - in real app, this would come from database
    const jobs = [
      { id: 1, title: 'Senior AI Engineer', company: 'Google', location: 'Mountain View, CA', salary: '$180k-250k', type: 'Full-time', domain: 'ai-ml', posted: '2 days ago', description: 'Build next-generation AI systems', skills: ['Python', 'TensorFlow', 'PyTorch', 'ML'], applicants: 234 },
      { id: 2, title: 'Machine Learning Scientist', company: 'Microsoft', location: 'Seattle, WA', salary: '$170k-240k', type: 'Full-time', domain: 'ai-ml', posted: '1 day ago', description: 'Research and develop ML algorithms', skills: ['Python', 'R', 'Statistics', 'Deep Learning'], applicants: 189 },
      { id: 3, title: 'AI Research Engineer', company: 'OpenAI', location: 'San Francisco, CA', salary: '$200k-300k', type: 'Full-time', domain: 'ai-ml', posted: '3 days ago', description: 'Advance the field of artificial intelligence', skills: ['Python', 'PyTorch', 'Research', 'NLP'], applicants: 456 },
      { id: 4, title: 'Computer Vision Engineer', company: 'Tesla', location: 'Palo Alto, CA', salary: '$160k-220k', type: 'Full-time', domain: 'ai-ml', posted: '1 week ago', description: 'Develop autonomous driving systems', skills: ['Python', 'OpenCV', 'Deep Learning', 'C++'], applicants: 312 },
      { id: 5, title: 'NLP Engineer', company: 'Meta', location: 'Menlo Park, CA', salary: '$150k-210k', type: 'Full-time', domain: 'ai-ml', posted: '4 days ago', description: 'Build language understanding systems', skills: ['Python', 'NLP', 'Transformers', 'PyTorch'], applicants: 278 }
    ];
    
    res.json({ jobs, user: req.user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

router.post('/apply', authMiddleware, async (req, res) => {
  try {
    const { jobId } = req.body;
    // Mock application logic - in real app, save to database
    res.json({ msg: 'Application submitted successfully', jobId, userId: req.user.id });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;
