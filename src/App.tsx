import React, { useState } from 'react';
import { BookOpen, Brain, Trophy, BarChart3, MessageSquare, Menu, Play, Clock, Target, Award, ChevronRight, Send, PlusCircle } from 'lucide-react';

type Tab = 'dashboard' | 'learn' | 'chat' | 'progress' | 'achievements';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleStartLearning = () => {
    setActiveTab('learn');
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-800">LearnAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button 
                onClick={handleStartLearning}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start Learning
              </button>
            </div>
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden p-4 border-t border-gray-100">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Search topics..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={handleStartLearning}
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start Learning
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="flex md:block space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                      activeTab === 'dashboard'
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>Dashboard</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('learn')}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                      activeTab === 'learn'
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Brain className="h-5 w-5" />
                    <span>Learn</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                      activeTab === 'chat'
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>AI Chat</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('progress')}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                      activeTab === 'progress'
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span>Progress</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('achievements')}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                      activeTab === 'achievements'
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Trophy className="h-5 w-5" />
                    <span>Achievements</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
                  
                  {/* Learning Progress */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
                      <h3 className="text-lg font-semibold">Current Progress</h3>
                      <div className="mt-2">
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-white rounded-full h-2 w-3/4"></div>
                        </div>
                        <p className="mt-2">75% Complete</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white">
                      <h3 className="text-lg font-semibold">Study Streak</h3>
                      <p className="text-3xl font-bold mt-2">7 Days</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-6 text-white">
                      <h3 className="text-lg font-semibold">Points Earned</h3>
                      <p className="text-3xl font-bold mt-2">2,450</p>
                    </div>
                  </div>

                  {/* Recommended Courses */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended for You</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <img
                            src={`https://images.unsplash.com/photo-${i === 1 ? '1516321318423-f06f85e504b3' : i === 2 ? '1488190211105-8b0e65b80b4e' : '1503676260728-1c00da094a0b'}?auto=format&fit=crop&w=800&q=80`}
                            alt="Course thumbnail"
                            className="w-full h-40 object-cover rounded-lg mb-4"
                          />
                          <h3 className="font-semibold text-gray-800">
                            {i === 1 ? 'Machine Learning Basics' : i === 2 ? 'Web Development' : 'Data Science'}
                          </h3>
                          <p className="text-sm text-gray-600 mt-2">
                            {i === 1 ? 'Learn the fundamentals of ML' : i === 2 ? 'Master modern web technologies' : 'Analyze and visualize data'}
                          </p>
                          <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-700">
                            Continue Learning →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'learn' && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">Your Learning Path</h2>
                    <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      <PlusCircle className="h-5 w-5" />
                      <span>Add New Course</span>
                    </button>
                  </div>

                  {/* Current Courses */}
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Machine Learning Fundamentals',
                        progress: 75,
                        timeLeft: '2 hours',
                        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
                      },
                      {
                        title: 'Advanced Python Programming',
                        progress: 45,
                        timeLeft: '4 hours',
                        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80'
                      }
                    ].map((course, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row gap-6">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full md:w-48 h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1 space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm text-gray-600">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-indigo-600 rounded-full h-2"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>{course.timeLeft} left</span>
                              </div>
                              <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
                                <Play className="h-4 w-4" />
                                <span>Continue</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learning Paths */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Suggested Learning Paths</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: 'Data Science Career Path',
                          courses: 12,
                          duration: '6 months'
                        },
                        {
                          title: 'Full-Stack Development',
                          courses: 15,
                          duration: '8 months'
                        }
                      ].map((path, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-semibold text-gray-800">{path.title}</h4>
                          <div className="mt-2 space-y-2">
                            <p className="text-gray-600">{path.courses} courses • {path.duration}</p>
                            <button className="text-indigo-600 font-medium hover:text-indigo-700">
                              View Path →
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'chat' && (
                <div className="h-[calc(100vh-12rem)] flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Tutor Chat</h2>
                  
                  {/* Chat Messages */}
                  <div className="flex-1 space-y-4 overflow-y-auto mb-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <Brain className="h-8 w-8 text-indigo-600" />
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-800">Hello! I'm your AI tutor. How can I help you with your learning journey today?</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask anything..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-12"
                    />
                    <button 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-indigo-700 p-2"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'progress' && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-800">Learning Progress</h2>

                  {/* Overall Progress */}
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Overall Progress</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Completed Courses</span>
                        <span>4/12</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-1/3"></div>
                      </div>
                    </div>
                  </div>

                  {/* Weekly Activity */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Weekly Activity</h3>
                    <div className="grid grid-cols-7 gap-2">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                        <div key={day} className="space-y-2">
                          <div className={`h-20 rounded-lg ${i < 5 ? 'bg-indigo-100' : 'bg-gray-100'}`}></div>
                          <div className="text-center text-sm text-gray-600">{day}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learning Goals */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Learning Goals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: 'Complete ML Basics', target: 'End of Month', progress: 75 },
                        { title: 'Practice Python Daily', target: 'Ongoing', progress: 60 },
                        { title: 'Read Documentation', target: 'Weekly', progress: 40 },
                        { title: 'Complete Projects', target: 'Quarterly', progress: 25 }
                      ].map((goal, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-800">{goal.title}</h4>
                              <div className="flex items-center text-sm text-gray-600 mt-1">
                                <Target className="h-4 w-4 mr-1" />
                                <span>{goal.target}</span>
                              </div>
                            </div>
                            <span className="text-sm font-medium text-indigo-600">{goal.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 rounded-full h-2"
                              style={{ width: `${goal.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">Your Achievements</h2>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold">2,450 Points</span>
                    </div>
                  </div>

                  {/* Recent Achievements */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Recent Achievements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: 'Quick Learner',
                          description: 'Completed 5 lessons in one day',
                          icon: Brain,
                          color: 'text-purple-500',
                          bg: 'bg-purple-100'
                        },
                        {
                          title: 'Streak Master',
                          description: '7 days learning streak',
                          icon: Award,
                          color: 'text-green-500',
                          bg: 'bg-green-100'
                        },
                        {
                          title: 'Perfect Score',
                          description: '100% on ML Basics quiz',
                          icon: Trophy,
                          color: 'text-yellow-500',
                          bg: 'bg-yellow-100'
                        }
                      ].map((achievement, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <div className={`inline-block p-3 rounded-lg ${achievement.bg} ${achievement.color} mb-4`}>
                            <achievement.icon className="h-6 w-6" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                          <p className="text-gray-600">{achievement.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement Progress */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">In Progress</h3>
                    <div className="space-y-4">
                      {[
                        { title: 'Course Creator', description: 'Create your first course', progress: 80 },
                        { title: 'Community Leader', description: 'Help 10 other learners', progress: 60 },
                        { title: 'Code Master', description: 'Complete all Python challenges', progress: 40 }
                      ].map((achievement, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                              <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                            <span className="text-sm font-medium text-indigo-600">{achievement.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 rounded-full h-2"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;