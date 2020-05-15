FROM openjdk:8-alpine

COPY target/uberjar/todo-backend.jar /todo-backend/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/todo-backend/app.jar"]
