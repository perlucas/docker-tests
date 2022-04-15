from mysql.connector import connect, Error
import os

try:
    with connect(
        host=os.environ['MYSQL_HOST'],
        user=os.environ['MYSQL_USER'],
        password=os.environ['MYSQL_PASSWORD'],
        database=os.environ['MYSQL_DATABASE']
    ) as connection:

        with connection.cursor() as cursor:
            cursor.execute('SELECT * FROM players')
            result = cursor.fetchall()

            print("Printing players from Python\n")

            for player in result:
                [_, name, score, birthdate] = player
                print(f"Player {name}, score {score}, born on {birthdate}")

except Error as e:
    print(e)