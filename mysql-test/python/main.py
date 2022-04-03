from mysql.connector import connect, Error

try:
    with connect(
        host="db",
        user="custom_user",
        password="custom_password",
        database="test"
    ) as connection:
        print(connection)

        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM players")
            result = cursor.fetchall()
            for row in result:
                print(row)


except Error as e:
    print(e)