@echo off

docker run -it --network mysql-test_default --rm mysql mysql -h mysql-test-db-1 -u root -proot