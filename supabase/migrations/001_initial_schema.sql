-- ============================================
-- Oskars AI - Initial Database Schema
-- ============================================

-- Ämnen
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  icon TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Innehåll
CREATE TABLE content_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  level INTEGER CHECK (level BETWEEN 1 AND 5),
  category TEXT,
  body TEXT,
  "order" INTEGER DEFAULT 0,
  subject_id UUID REFERENCES subjects(id),
  quick_win TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Prompts
CREATE TABLE prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  prompt_text TEXT NOT NULL,
  variables JSONB DEFAULT '[]',
  pedagogical_note TEXT,
  subject_id UUID REFERENCES subjects(id),
  purpose TEXT,
  level INTEGER CHECK (level BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Projekt
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  url TEXT,
  image_url TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Validitetsguider
CREATE TABLE validity_guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  body TEXT,
  subject_id UUID REFERENCES subjects(id),
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Nivåtest: Quiz-frågor
CREATE TABLE quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'multiple_choice',
  options JSONB NOT NULL,
  correct_answer INTEGER NOT NULL,
  level INTEGER CHECK (level BETWEEN 1 AND 5),
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Nivåtest: Självskattning
CREATE TABLE self_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  statement TEXT NOT NULL,
  level INTEGER CHECK (level BETWEEN 1 AND 5),
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Blogg (förberett)
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  body TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Analytics: Sidvisningar
CREATE TABLE page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Analytics: Quiz-resultat
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  score NUMERIC,
  level_result INTEGER,
  answers JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Analytics: Content engagement
CREATE TABLE content_engagement (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id UUID,
  action_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- Indexes
-- ============================================
CREATE INDEX idx_content_sections_level ON content_sections(level);
CREATE INDEX idx_content_sections_category ON content_sections(category);
CREATE INDEX idx_prompts_subject ON prompts(subject_id);
CREATE INDEX idx_prompts_purpose ON prompts(purpose);
CREATE INDEX idx_prompts_level ON prompts(level);
CREATE INDEX idx_page_views_path ON page_views(path);
CREATE INDEX idx_page_views_created ON page_views(created_at);
CREATE INDEX idx_quiz_results_created ON quiz_results(created_at);

-- ============================================
-- RLS Policies
-- ============================================

-- Enable RLS on all tables
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE validity_guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE self_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_engagement ENABLE ROW LEVEL SECURITY;

-- Public read access for content tables
CREATE POLICY "Public read subjects" ON subjects FOR SELECT USING (true);
CREATE POLICY "Public read content" ON content_sections FOR SELECT USING (true);
CREATE POLICY "Public read prompts" ON prompts FOR SELECT USING (true);
CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read validity" ON validity_guides FOR SELECT USING (true);
CREATE POLICY "Public read quiz" ON quiz_questions FOR SELECT USING (true);
CREATE POLICY "Public read assessments" ON self_assessments FOR SELECT USING (true);
CREATE POLICY "Public read published blogs" ON blog_posts FOR SELECT USING (published = true);

-- Public insert for analytics (anonymous tracking)
CREATE POLICY "Public insert page views" ON page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert quiz results" ON quiz_results FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert engagement" ON content_engagement FOR INSERT WITH CHECK (true);

-- Admin full access (authenticated users)
CREATE POLICY "Admin manage subjects" ON subjects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin manage content" ON content_sections FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin manage prompts" ON prompts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin manage projects" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin manage validity" ON validity_guides FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin manage quiz" ON quiz_questions FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin manage assessments" ON self_assessments FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin manage blogs" ON blog_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin read page views" ON page_views FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Admin read quiz results" ON quiz_results FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Admin read engagement" ON content_engagement FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================
-- Seed data: Ämnen
-- ============================================
INSERT INTO subjects (name, slug, icon, description) VALUES
  ('Svenska', 'svenska', '📚', 'AI-strategier för svenskundervisning'),
  ('Matematik', 'matematik', '🔢', 'AI-strategier för matematikundervisning'),
  ('Engelska', 'engelska', '🌍', 'AI-strategier för engelskundervisning'),
  ('SO', 'so', '🏛️', 'AI-strategier för samhällsorienterande ämnen'),
  ('NO', 'no', '🔬', 'AI-strategier för naturorienterande ämnen'),
  ('Teknik', 'teknik', '⚙️', 'AI-strategier för teknikundervisning'),
  ('Moderna språk', 'moderna-sprak', '💬', 'AI-strategier för moderna språk'),
  ('Idrott', 'idrott', '🏃', 'AI-strategier för idrott och hälsa'),
  ('Musik', 'musik', '🎵', 'AI-strategier för musikundervisning'),
  ('Bild', 'bild', '🎨', 'AI-strategier för bildundervisning'),
  ('Slöjd', 'slojd', '🔨', 'AI-strategier för slöjdundervisning'),
  ('HKK', 'hkk', '🍳', 'AI-strategier för hem- och konsumentkunskap');

-- ============================================
-- Seed data: Projekt
-- ============================================
INSERT INTO projects (name, slug, description, url, "order") VALUES
  ('Jurni', 'jurni', 'AI-driven plattform för personligt lärande och reflektion.', '#', 1),
  ('Feedbacker', 'feedbacker', 'Verktyg för effektiv, AI-stödd återkoppling till elever.', '#', 2),
  ('LektionsFlow', 'lektionsflow', 'Smarta lektionsplaneringar med AI som sparar tid och höjer kvaliteten.', '#', 3);
