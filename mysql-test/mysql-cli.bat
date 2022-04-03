@echo off

docker run -it --network mysql-test_default --rm mysql mysql -h mysql-test__db__mysql -u custom_user -pcustom_password