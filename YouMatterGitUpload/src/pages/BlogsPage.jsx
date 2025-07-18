import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';

const BlogsPage = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const blogs = [
    {
      id: '1',
      title: 'How to Build Mental Resilience',
      snippet: 'Resilience is the ability to bounce back from life\'s challenges. Learn practical ways to develop this essential skill.',
      content: `Resilience is the ability to bounce back from life's challenges. It's not about being unbreakable—it's about being flexible enough to heal and grow from difficult experiences.

Start with Self-Compassion
The foundation of resilience is treating yourself with the same kindness you'd show a good friend. When you make mistakes or face setbacks, speak to yourself gently. Replace harsh self-criticism with understanding and patience.

Set Healthy Boundaries
Resilient people know their limits and respect them. This means saying no to commitments that drain you, limiting exposure to negative influences, and creating space for rest and recovery.

Celebrate Small Wins
Every step forward matters, no matter how small. Did you get out of bed on a difficult day? That's worth celebrating. Did you reach out for help when you needed it? That takes courage and deserves recognition.

Build Your Support Network
Resilience isn't built in isolation. Cultivate relationships with people who support your wellbeing. This might include friends, family, therapists, or support groups.

Practice Mindfulness
Stay grounded in the present moment. When we're overwhelmed, our minds often race between regrets about the past and worries about the future. Mindfulness helps us focus on what we can control right now.

Remember, resilience is a skill that develops over time. Be patient with yourself as you practice these techniques. Each small step builds your capacity to navigate life's challenges with greater ease and confidence.`,
      readTime: '5 min read'
    },
    {
      id: '2',
      title: '5-Minute Breathing Exercises That Work',
      snippet: 'Simple breathing techniques that can calm your nervous system and reduce anxiety in just minutes.',
      content: `Take a seat and get comfortable. Breathing exercises are one of the most accessible tools for managing stress and anxiety. Here are proven techniques you can use anywhere, anytime.

The 4-4-6 Technique
This is perfect for beginners and highly effective for calming anxiety:
- Inhale slowly through your nose for 4 counts
- Hold your breath for 4 counts
- Exhale slowly through your mouth for 6 counts
- Repeat for 5-10 cycles

Box Breathing
Used by Navy SEALs and meditation practitioners alike:
- Inhale for 4 counts
- Hold for 4 counts
- Exhale for 4 counts
- Hold empty for 4 counts
- Continue for 3-5 minutes

The 7-11 Technique
Great for deeper relaxation:
- Inhale for 7 counts
- Exhale for 11 counts
- The longer exhale activates your parasympathetic nervous system

Belly Breathing
Place one hand on your chest, one on your belly. Focus on making the bottom hand move more than the top hand as you breathe slowly and deeply.

Why This Works
Simple breathing resets your nervous system and calms anxious thoughts. When we're stressed, our breathing becomes shallow and rapid. Intentional, slow breathing signals to your brain that you're safe.

Just 5 minutes a day can ground you more than a whole afternoon of overthinking. Start with one technique and practice it consistently. Your nervous system will thank you.`,
      readTime: '4 min read'
    },
    {
      id: '3',
      title: 'When You Need to Talk But Don\'t Know How',
      snippet: 'Opening up about mental health can feel overwhelming. Here\'s how to start those important conversations.',
      content: `Talking helps—but not everyone knows how to start. If you're struggling to find the words to express what you're going through, you're not alone. Here's how to begin.

Start Simple
You don't need to explain everything at once. Try phrases like:
- "I'm not okay, but I want to be."
- "I'm going through a difficult time and could use someone to listen."
- "I'm struggling with my mental health and need support."

Choose the Right Person
Think about who in your life makes you feel safe and heard. This might be:
- A trusted friend or family member
- A counselor or therapist
- A support group
- A crisis helpline
- An AI chatbot like YouMatter as a first step

Practice Self-Advocacy
It's okay to ask for what you need:
- "I need you to just listen without trying to fix anything."
- "I'd like advice, but only if you're comfortable giving it."
- "Can we just sit together? I don't need to talk right now."

Use Writing as a Bridge
If speaking feels too hard, consider:
- Writing a letter or text message
- Sharing an article that resonates with you
- Using voice messages when you're feeling more articulate

Know That Imperfect Communication is Still Communication
You don't need to have all the answers or explain everything perfectly. Mental health struggles are complex, and it's normal for your explanation to feel messy or incomplete.

**Professional Help is Always an Option**
Therapists are trained to help you find words for difficult feelings. They create a safe space where you can explore your thoughts without judgment.

Remember, reaching out is a sign of strength, not weakness. Every conversation gets a little easier, and YouMatter's chatbot can be your first step before you open up to someone else.`,
      readTime: '6 min read'
    },
    {
      id: '4',
      title: 'Understanding Emotional Burnout',
      snippet: 'Burnout isn\'t laziness—it\'s emotional exhaustion. Learn to recognize the signs and start your recovery.',
      content: `Burnout isn't laziness. It's emotional exhaustion that affects your entire being. If you're feeling numb, tired, or unable to enjoy things you once loved, you might be experiencing burnout.

Recognizing the Signs
Burnout often creeps up slowly. Common symptoms include:
- Chronic fatigue that rest doesn't fix
- Feeling emotionally numb or detached
- Decreased motivation and productivity
- Increased irritability or cynicism
- Physical symptoms like headaches or stomach issues
- Difficulty concentrating or making decisions

It's Not Your Fault
Burnout often results from:
- Chronic workplace stress
- Caregiving responsibilities
- Perfectionism and overcommitment
- Lack of control over your environment
- Insufficient support systems

The Recovery Process
Recovery starts with acknowledgment and self-compassion:

Rest is Non-Negotiable
This isn't just sleep (though that's important). It's mental and emotional rest:
- Take breaks during your day
- Set boundaries around work and responsibilities
- Give yourself permission to do "nothing"

Reconnect with Your Values
Burnout often happens when we're disconnected from what truly matters to us. Ask yourself:
- What activities used to bring you joy?
- What are your core values?
- How can you align your daily life with these values?

Start Small
Don't try to overhaul your entire life at once:
- Take a 10-minute walk outside
- Say no to one non-essential commitment
- Reach out to one supportive person

Professional Support
Consider therapy, especially if burnout is affecting your work, relationships, or daily functioning. A mental health professional can help you develop personalized strategies for recovery.

Be Patient with Yourself
Recovery from burnout takes time. There will be good days and difficult days. Progress isn't always linear, and that's completely normal.

Remember, acknowledging burnout and seeking help are acts of self-preservation, not self-indulgence. You deserve to feel energized and engaged with your life again.`,
      readTime: '7 min read'
    },
    {
      id: '5',
      title: 'Digital Detox for the Anxious Mind',
      snippet: 'Constant connectivity can overwhelm our nervous system. Learn how to create healthy boundaries with technology.',
      content: `Constant scrolling overloads our brain. If you find yourself feeling more anxious after time on social media or constantly checking your phone, a digital detox might help restore your peace of mind.

Why Digital Overwhelm Happens
Our brains weren't designed for the constant stream of information we receive through digital devices:
- Social media triggers comparison and FOMO
- News cycles increase anxiety and stress
- Blue light disrupts sleep patterns
- Notifications fragment our attention
- Endless scrolling creates dopamine dependency

Start with Small Changes
You don't need to go completely offline. Small adjustments can make a big difference:

The One-Hour Window
Try a 1-hour no-screen window daily. This could be:
- First hour after waking up
- During meals
- Before bedtime
- During a walk or exercise

Curate Your Feed
Be intentional about what content you consume:
- Unfollow accounts that make you feel bad about yourself
- Follow accounts that inspire and educate
- Use the "mute" feature for triggering keywords
- Subscribe to positive, mental health-focused content

Silence the Noise
Take control of notifications:
- Turn off non-essential notifications
- Use "Do Not Disturb" modes
- Keep your phone in another room while sleeping
- Designate phone-free zones in your home

Replace, Don't Just Remove
When you reduce screen time, fill that space with activities that nourish you:
- Reading physical books
- Going for walks in nature
- Practicing a hobby
- Having face-to-face conversations
- Journaling or creative writing

The Science of Rest
Your nervous system needs time to process and integrate experiences. Constant digital input doesn't allow for this natural processing. Regular breaks help you:
- Reduce cortisol (stress hormone) levels
- Improve focus and creativity
- Sleep better
- Feel more present in your relationships

Creating Sustainable Habits
Start with one small change and build from there. The goal isn't perfection—it's creating a healthier relationship with technology that supports your mental wellbeing.

Remember, your peace matters more than any algorithm. You have the power to choose what information enters your mind and when.`,
      readTime: '6 min read'
    },
    {
      id: '6',
      title: 'The Power of Journaling in Self-Healing',
      snippet: 'Discover how putting pen to paper can help process emotions, gain clarity, and support your mental health journey.',
      content: `Write to release. Journaling is a judgment-free way to process feelings, reflect on experiences, and find hidden clarity. You don't need to be a "good writer"—you just need to write honestly.

Why Journaling Works
When we keep thoughts and emotions locked inside, they often spiral and intensify. Writing them down:
- Helps you externalize and examine your thoughts
- Provides emotional release and catharsis
- Reveals patterns in your thinking and behavior
- Creates distance between you and overwhelming emotions
- Improves self-awareness and emotional intelligence

Getting Started: No Rules Required
There's no "right" way to journal. You might:
- Write stream-of-consciousness thoughts
- Answer specific prompts
- List things you're grateful for
- Describe your day and how it made you feel
- Write letters to yourself or others (that you don't send)

Helpful Prompts for Mental Health
When you don't know where to start, try these:
- "Right now I'm feeling... because..."
- "Three things I'm grateful for today are..."
- "What I need most right now is..."
- "If I could tell my past self one thing, it would be..."
- "Tomorrow I want to focus on..."

Different Styles for Different Needs

Morning Pages
Write three pages of stream-of-consciousness thoughts first thing in the morning. This practice, popularized by Julia Cameron, helps clear mental clutter.

Gratitude Journaling
Write down 3-5 things you're grateful for each day. This simple practice can significantly improve mood and overall wellbeing.

Emotion Processing
When you're upset, write about:
- What happened
- How you felt
- What thoughts went through your mind
- What you learned or how you want to respond

Problem-Solving Journal
Write about challenges you're facing, then brainstorm possible solutions. Sometimes the act of writing reveals answers we already know.

Making It Sustainable
- Start with just 5 minutes a day
- Don't worry about grammar or spelling
- Keep your journal private
- Choose a consistent time (morning, evening, or whenever feels right)
- Use whatever feels comfortable: notebook, phone app, or computer

The Healing Power of Perspective
Over time, journaling helps you see your growth and progress. Looking back at old entries, you might notice:
- How you've overcome previous challenges
- Patterns in your thinking that you want to change
- Strength and resilience you didn't know you had

Remember, journaling is a tool for self-discovery and healing. There's no judgment here—only the opportunity to understand yourself better and process your experiences in a healthy way.

Your thoughts and feelings are valid, and they deserve to be acknowledged. Sometimes, simply writing them down is the first step toward healing.`,
      readTime: '8 min read'
    }
  ];

  const toggleBlog = (blogId) => {
    setExpandedBlog(expandedBlog === blogId ? null : blogId);
  };

 return (
    <div className="min-h-screen bg-[#FDFCF9] dark:bg-[#1E1B2E] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2E2E2E] dark:text-[#EDE9FE] mb-4">Wellness Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Expert insights and practical tips for your mental wellness journey
          </p>
        </div>

        {/* Blog Cards */}
        <div className="space-y-8">
          {blogs.map(blog => (
            <article
              key={blog.id}
              className="bg-white dark:bg-[#2C2542] rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#2E2E2E] dark:text-[#EDE9FE] mb-4">
                  {blog.title}
                </h2>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Clock size={14} className="mr-2" />
                  <span>{blog.readTime}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  {blog.snippet}
                </p>

                <button
                  onClick={() => toggleBlog(blog.id)}
                  className="inline-flex items-center space-x-2 text-[#A78BFA] dark:text-[#C4B5FD] hover:text-[#9333EA] dark:hover:text-[#A78BFA] font-semibold transition-colors text-lg"
                >
                  <span>{expandedBlog === blog.id ? 'Read Less' : 'Read More'}</span>
                  {expandedBlog === blog.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {expandedBlog === blog.id && (
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                    <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                      {blog.content.split('\n\n').map((paragraph, index) => (
                        <p
                          key={index}
                          className={`mb-6 leading-relaxed ${
                            paragraph.startsWith('**') && paragraph.endsWith('**')
                              ? 'font-semibold text-[#A78BFA] dark:text-[#C4B5FD] text-xl'
                              : 'text-gray-700 dark:text-gray-300 text-lg'
                          }`}
                        >
                          {paragraph.startsWith('**') && paragraph.endsWith('**')
                            ? paragraph.slice(2, -2)
                            : paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;