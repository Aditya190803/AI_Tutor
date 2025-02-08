import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, CheckCircle, Clock, BookOpen, BarChart, Award } from 'lucide-react';
import { courses } from '../data/courses';

export default function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 md:h-96">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-lg opacity-90 mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2" />
                  <span>{course.progress}% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Topics */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.topics.map((topic, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chapters */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Course Content</h2>
            <div className="space-y-4">
              {course.chapters.map((chapter, index) => (
                <div key={chapter.id} className="border border-gray-200 rounded-lg">
                  <div className="p-4 bg-gray-50">
                    <h3 className="font-semibold text-gray-800">
                      Chapter {index + 1}: {chapter.title}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {chapter.lessons.map(lesson => (
                      <div key={lesson.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Play className="h-5 w-5 text-gray-400" />
                          )}
                          <div>
                            <h4 className="text-gray-800">{lesson.title}</h4>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{lesson.duration}</span>
                              <span className="mx-2">•</span>
                              <span className="capitalize">{lesson.type}</span>
                            </div>
                          </div>
                        </div>
                        <button 
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            lesson.completed
                              ? 'text-green-600 bg-green-50'
                              : 'text-indigo-600 bg-indigo-50'
                          }`}
                        >
                          {lesson.completed ? 'Completed' : 'Start'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Overall Completion</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 rounded-full h-2"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Continue Learning
              </button>
            </div>
          </div>

          {/* Achievement Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Achievements</h3>
            <div className="space-y-4">
              {[
                { title: 'Fast Learner', description: 'Complete 3 lessons in a day', icon: Award, progress: 66 },
                { title: 'Perfect Score', description: 'Get 100% in a quiz', icon: Award, progress: 0 },
                { title: 'Chapter Master', description: 'Complete a full chapter', icon: Award, progress: 33 }
              ].map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-800">{achievement.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                      <div
                        className="bg-indigo-600 rounded-full h-1.5"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}