import pandas as pd
import psycopg

df = pd.read_csv("data/pink_floyd_lyrics.csv")

conn = psycopg.connect(
    "postgresql://postgres:postgres@localhost:51214/template1"
)

for _, row in df.iterrows():
    print(row["album"], row["song_title"])

conn.close()


