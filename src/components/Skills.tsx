import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'PHP', level: 65 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Canva', level: 70 },
        { name: 'VS Code', level: 65 },
        { name: 'Figma', level: 75 },
        { name: 'Microsoft Office', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements - unique for Skills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-24 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 left-16 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 border-2 border-purple-300 rounded-full animate-spin-slow"></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm dark:shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
            Other Skills & Interests
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Responsive Design',
              'Hardworking',
              'Teamwork',
              'Communication',
              'Problem Solving',
              'Adaptability',
              'Time Management'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-gray-700 dark:text-gray-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'MongoDB', 'Machine Learning', 'C++'].map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 