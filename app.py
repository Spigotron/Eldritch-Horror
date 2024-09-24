from flask import Flask, jsonify, render_template, request
import mysql.connector

app = Flask(__name__)

# MySQL connection setup
def get_db_connection():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="eldritchhorror",
        database="eh_db"
    )
    return conn

# GET all games
@app.route('/games', methods=['GET'])
def get_games():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM games")
    games = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('games.html', games=games)

# GET a specific game by ID
@app.route('/games/<int:id>', methods=['GET'])
def get_game(id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM games WHERE id = %s", (id,))
    game = cursor.fetchone()
    cursor.close()
    conn.close()
    return jsonify(game)

# POST a new game
@app.route('/games', methods=['POST'])
def add_game():
    new_game = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO games (date, ancient_one, victory, score, player_count, investigator_count, notes)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """, (new_game['date'], new_game['ancient_one'], new_game['victory'], 
          new_game['score'], new_game['player_count'], new_game['investigator_count'], 
          new_game['notes']))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify(new_game), 201

# PUT to update a game
@app.route('/games/<int:id>', methods=['PUT'])
def update_game(id):
    updated_game = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE games
        SET date = %s, ancient_one = %s, victory = %s, score = %s, player_count = %s,
            investigator_count = %s, notes = %s
        WHERE id = %s
    """, (updated_game['date'], updated_game['ancient_one'], updated_game['victory'], 
          updated_game['score'], updated_game['player_count'], updated_game['investigator_count'], 
          updated_game['notes'], id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify(updated_game)

# DELETE a game
@app.route('/games/<int:id>', methods=['DELETE'])
def delete_game(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM games WHERE id = %s", (id,))
    conn.commit()
    cursor.close()
    conn.close()
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)

# cursor = conn.cursor()

# cursor.execute("""
#     CREATE TABLE games (
#         id INT AUTO_INCREMENT PRIMARY KEY,
#         date DATE,
#         ancient_one ENUM ('Abhoth', 'Antediluvium', 'Atlach-Nacha', 'Azathoth', 'Cthulhu', 'Hastur', 'Hypnos', 'Ithaqua', 'Nephren-Ka', 'Nyarlathotep', 'Rise of the Elder Things', 'Shub-Niggurath', "Shudde M'ell", 'Syzygy', 'Yig', 'Yog-Sothoth'),
#         victory ENUM ('Yes', 'No'),
#         score INT,
#         player_count INT,
#         investigator_count INT,
#         notes VARCHAR(1000)
#     )
# """)

# query = """
#     INSERT INTO games (date, ancient_one, victory, score, player_count, investigator_count, notes)
#     VALUES (%s, %s, %s, %s, %s, %s, %s)
# """

# values = ('2024-03-16', "Shudde M'ell", 'Yes', '-15', '3', '4', 'No disasters')

# cursor.execute(query, values)

# conn.commit()
# cursor.close()
# conn.close()