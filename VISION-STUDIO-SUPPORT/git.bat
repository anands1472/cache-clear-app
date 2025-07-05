@echo off
set GIT_PATH="C:\Program Files\Git\bin\git.exe"

if %1%==commit (
    echo fatal: git commit disabled through command line
    exit /b
) 

if %1%==push (
    echo fatal: git push disabled through command line
    exit /b
) 

%GIT_PATH% %*