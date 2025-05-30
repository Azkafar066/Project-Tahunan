export default function App() {
  return (
    <>
      <div className="w-[4100px] h-[150px] bg-blue-600 rounded-md shadow-md flex items-center px-4 mx-auto">
        <img src="AFALogo.png" alt="AFALogo" className="h-20 w-auto" />
        <h1 className="text-blue-300 text-4xl ml-4 font-['Berkshire_Swash']">
          My Portfolio
        </h1>
        <a href="/profile" class="inline-block px-6 py-3 bg-blue-300 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
  About Me
</a>
<a href="/informasi">
  <button class="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
    Personal Information
  </button>
  </a>
<a href="idolaku.html">
  <button class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
    My Idol
  </button>
</a>
<a href="contact.html">
  <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
    Contact Me
  </button>
</a>
<a href="login.html">
  <button class="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition w-fit gap-2">
    <span>Login</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="8" r="4" stroke-width="2" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  </button>
</a>
<button class="bg-blue-200 text-blue-900 border border-yellow-400 hover:bg-blue-900 hover:text-yellow-400 font-semibold py-2 px-4 rounded transition duration-300">
  My Favorite Football Team
</button>



      </div>
{/* eskul */}
      <div className="flex justify-center mt-10 space-x-8">
        <div className="max-w-sm bg-blue-300 rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Extracurricular activity</h1>
          <p className="text-gray-600">
            Extracurricular activities are programs or activities at school that students can join outside of their normal lessons, such as sports, music, drama, or school clubs.
          </p>
          <img
            src="extracurricular-activities.png"
            alt="extracurricular-activities"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>

        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Archery.</h1>
          <p className="text-gray-600">
          Focus and concentration

          Hand-eye coordination

         Patience and self-control

         Discipline and consistency

         Strong body posture

         Confidence and calmness

         Goal setting

         Better physical and mental balance

         Respect and sportsmanship

         Teamwork and support
          </p>
          <img
            src="Archery.jpeg"
            alt="Archery"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Swimming.</h1>
          <p className="text-gray-600">          
           Body strength and stamina
           Breathing control
           Better coordination
           Water safety skills
           Discipline and focus
           Confidence in water
           Stress relief
           Endurance and speed
           Healthy lifestyle
           Time management (during training)
            Freestyle

            Breaststroke

           Backstroke

           Butterfly Stroke

           Breaststroke
          </p>
          <img
            src="Swimming.jpg"
            alt="Swimming"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Taekwondo.</h1>
          <p className="text-gray-600">
           Taekwondo in Islam

           Self-defense skills

           Discipline and respect

            Body strength and flexibility

           Focus and concentration

           Confidence and courage

           Quick reflexes

           Balance and coordination

           Stress control

           Goal setting (belts & progress)

           Team spirit and leadership
          </p>
          <img
            src="Taekwondo.jpg"
            alt="Taekwondo"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
      </div> 
{/* skills */}
        <div className="flex justify-center mt-10 space-x-8">
        <div className="max-w-sm bg-yellow-300 rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">My skills</h1>
          <p className="text-gray-600">
            Skills are the things you can do well.
            They can be learned through practice and experience.
            For example: cooking, writing, drawing, or playing football are all skills.
          </p>
          <img
            src="skill.png"
            alt="skill"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>

        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Cooking.</h1>
          <p className="text-gray-600">
           Cooking in Islam

           Cooking is a good and useful activity in Islam. It helps us prepare clean and halal food for ourselves and others.
           The Prophet Muhammad (peace be upon him) taught us to eat good food and to share with others. Cooking with love and care can be a way to show kindness and get rewards from Allah.
          As long as the food is halal and healthy, cooking is a good act in Islam.
          </p>
          <img
            src="Cooking.jpg"
            alt="Archery"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Playing Basketball with style.</h1>
          <p className="text-gray-600">
               
           Playing Basketball in Islam

           Playing basketball is allowed in Islam as long as it is done in a good way. It helps keep the body healthy and strong.    
           The Prophet Muhammad (peace be upon him) taught us to take care of our bodies and stay active. Sports like basketball can also teach teamwork, patience, and discipline.
           As long as we dress properly, avoid bad behavior, and pray on time, playing basketball is a good and fun activity in Islam.
          </p>
          <img
            src="PlayingBasketball.jpg"
            alt="PlayingBasketball"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Design.</h1>
          <p className="text-gray-600">
           Design in Islam

           Design in Islam means creating beautiful and useful things in a way that follows Islamic values. Islamic design often uses patterns, shapes, and art that do not show living beings, because Islam teaches respect for all life.          
           Design should be done with honesty, kindness, and respect. It can be used to make buildings, clothes, books, and more that help people and please Allah.
           Good design in Islam shows creativity while following Islamic teachings.
           
          </p>
          <img
            src="Design.webp"
            alt="Design"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
      </div> 
      {/* mapel */}
         <div className="flex justify-center mt-10 space-x-8">
        <div className="max-w-sm bg-blue-700 rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Subjects</h1>
          <p className="text-gray-600">
           Subject is a topic or area that you learn about in school.
           Examples of subjects are math, science, history, and English.
                        
          </p> 
            
          <img
            src="elearning.png"
            alt="elearning"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>

        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Mathematics.</h1>
          <p className="text-gray-600">
           Problem solving

           Logical thinking

           Critical thinking

           Paying attention to details

           Analyzing data

           Using numbers correctly

           Making smart decisions

           Time management (during tests)

           Understanding patterns

           Thinking step by step
           
          </p>
          <img
            src="Math.jpeg"
            alt="Math"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Sosial studies.</h1>
          <p className="text-gray-600">
               
            Understand people and society

            Know history and culture

           Think critically about the world  

           Solve social problems

           Respect different opinions

           Work well with others

           Make good decisions

           Understand maps and geography

           Learn about economy and politics

           Be a responsible citizen

          </p>
          <img
            src="Geography.jpg"
            alt="Geography"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">English lesson.</h1>
          <p className="text-gray-600">
           Speak clearly

           Understand others

           Read English texts

           Write in English

            Good grammar and vocabulary

           Confident communication

           Think in English

           Better job chances

           Travel easily

           Connect with the world


          </p>
          <img
            src="English.jpg"
            alt="English"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
      </div> 
      <div className="flex justify-center mt-10 space-x-8">
        <div className="max-w-sm bg-blue-200 rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Subjects</h1>
          <p className="text-gray-600">
           Subject is a topic or area that you learn about in school.
           Examples of subjects are math, science, history, and English.
                        
          </p> 
            
          <img
            src="elearning.png"
            alt="elearning"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>

        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Arabic language.</h1>
          <p className="text-gray-600">
           

           Read Arabic texts like the Qur’an
  
           Write in Arabic
 
           Understand Arab culture and traditions

           Translate between Arabic and other languages

           Better memory and focus

           More job opportunities

           Communicate with Arabic speakers

           Learn about Islam more deeply

           Think more clearly and logically
           
           </p>
           <img
            src="Arab.jpg"
            alt="Arab"
            className="w-20 h-20 object-contain mx-auto"
           />
        </div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">IT.</h1>
          <p className="text-gray-600">
           Use computers and software

           Write and understand code

           Fix tech problems (troubleshooting)

           Set up networks and internet

           Build websites and apps

           Protect data and systems (cybersecurity)

           Work with data

           Think logically and creatively
 
           Work well in a team

           Get ready for tech jobs
          </p>
          <img
            src="IT.png"
            alt="IT"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Science.</h1>
          <p className="text-gray-600">           
           Observe and explore the world

           Think logically and solve problems

           Do experiments and follow steps

           Ask questions and find answers

           Understand nature and how things work

           Use tools and measure things

           Analyze data and make conclusions

           Work in teams and share ideas

           Be curious and keep learning

           Make smart, science-based decisions
          </p>
          <img
            src="IPA.webp"
            alt="IPA"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
      </div> 
    </>
  );
}