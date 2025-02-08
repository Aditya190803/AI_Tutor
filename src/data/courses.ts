import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'ml-basics',
    title: 'Machine Learning Basics',
    description: 'Learn the fundamentals of machine learning, from data preprocessing to model evaluation.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    duration: '6 weeks',
    level: 'Beginner',
    topics: ['Data Preprocessing', 'Supervised Learning', 'Model Evaluation', 'Neural Networks'],
    progress: 75,
    chapters: [
      {
        id: 'ch1',
        title: 'Introduction to Machine Learning',
        lessons: [
          {
            id: 'l1',
            title: 'What is Machine Learning?',
            duration: '15 min',
            completed: true,
            type: 'video'
          },
          {
            id: 'l2',
            title: 'Types of Machine Learning',
            duration: '20 min',
            completed: true,
            type: 'video'
          },
          {
            id: 'l3',
            title: 'Knowledge Check',
            duration: '10 min',
            completed: true,
            type: 'quiz'
          }
        ]
      },
      {
        id: 'ch2',
        title: 'Data Preprocessing',
        lessons: [
          {
            id: 'l4',
            title: 'Data Cleaning',
            duration: '25 min',
            completed: true,
            type: 'video'
          },
          {
            id: 'l5',
            title: 'Feature Scaling',
            duration: '20 min',
            completed: false,
            type: 'video'
          },
          {
            id: 'l6',
            title: 'Preprocessing Exercise',
            duration: '30 min',
            completed: false,
            type: 'exercise'
          }
        ]
      }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Master modern web technologies and build responsive, dynamic websites.',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80',
    duration: '8 weeks',
    level: 'Intermediate',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
    progress: 45,
    chapters: [
      {
        id: 'ch1',
        title: 'HTML & CSS Fundamentals',
        lessons: [
          {
            id: 'l1',
            title: 'HTML Structure',
            duration: '20 min',
            completed: true,
            type: 'video'
          },
          {
            id: 'l2',
            title: 'CSS Styling',
            duration: '25 min',
            completed: true,
            type: 'video'
          },
          {
            id: 'l3',
            title: 'Responsive Design',
            duration: '30 min',
            completed: false,
            type: 'video'
          }
        ]
      },
      {
        id: 'ch2',
        title: 'JavaScript Essentials',
        lessons: [
          {
            id: 'l4',
            title: 'Variables & Functions',
            duration: '25 min',
            completed: false,
            type: 'video'
          },
          {
            id: 'l5',
            title: 'DOM Manipulation',
            duration: '30 min',
            completed: false,
            type: 'video'
          },
          {
            id: 'l6',
            title: 'Coding Challenge',
            duration: '45 min',
            completed: false,
            type: 'exercise'
          }
        ]
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Learn to analyze and visualize data using Python and popular data science libraries.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    duration: '10 weeks',
    level: 'Advanced',
    topics: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
    progress: 25,
    chapters: [
      {
        id: 'ch1',
        title: 'Python for Data Science',
        lessons: [
          {
            id: 'l1',
            title: 'Python Basics',
            duration: '30 min',
            completed: true,
            type: 'video'
          },
          {
            id: 'l2',
            title: 'Working with Arrays',
            duration: '25 min',
            completed: false,
            type: 'video'
          },
          {
            id: 'l3',
            title: 'Python Quiz',
            duration: '15 min',
            completed: false,
            type: 'quiz'
          }
        ]
      },
      {
        id: 'ch2',
        title: 'Data Analysis with Pandas',
        lessons: [
          {
            id: 'l4',
            title: 'Pandas Introduction',
            duration: '35 min',
            completed: false,
            type: 'video'
          },
          {
            id: 'l5',
            title: 'Data Manipulation',
            duration: '40 min',
            completed: false,
            type: 'video'
          },
          {
            id: 'l6',
            title: 'Analysis Project',
            duration: '60 min',
            completed: false,
            type: 'exercise'
          }
        ]
      }
    ]
  }
];