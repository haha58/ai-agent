CREATE TABLE users (
  id TEXT PRIMARY KEY,
  display_name TEXT,
  created_at_ms INTEGER NOT NULL
);

CREATE TABLE auth_sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL
);