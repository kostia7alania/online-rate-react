# DEMO
<a target="_blank" href="https://kostia7alania.github.io/online-rate-react/build/">LINK TO DEMO</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Задание 1
Необходимо реализовать скрипт на nodejs который на вход принимает 3 параметра:

path - путь к директории
search - шаблон поиска в формате glob ( например: src/**/*.js )
ignore - необязательный параметр, путь к файлу содержащему список шаблонов в формате glob (.gitignore, .eslintignore)

Задача скрипта:
Найти по указанному path все файлы отвечающие шаблону search, игнорируя пути из параметра ignore, если он передан.
В каждый из найденных файлов добавить в начало строку "/ script was here /\n\n”.
Если в файле уже присутствует данная строка, файл игнорируется.

# Задание 2
Нужно запилить мини проект на React.
Через равные промежутки времени получать в приложение из открытого источника данные по двум курсам валют: USD, EUR.
Выводить их на экран в виде простой таблицы и мултилайнчарта накопленной историей с момента загрузки страницы.
Источник, промежутки времени получения данных, максимальное количество строк в истории – на твое усмотрение.

Результат выполнения задачи: репозиторий на github с исходным кодом и собранным проектом в папке build.