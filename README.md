# react-project について

`creat-react-app`コマンドで作成したサンプルプロジェクト

ファイル構成は以下の通り

![react-projectファイル構成.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1614172/a869972f-56f1-cd58-883a-467cae083604.png)

src ディレクトリには自動生成された App.js や index.html がはいっている

今後サンプル TODO アプリを作成していく

完成見本（JS で作成した TODO）→[https://codesandbox.io/s/headless-surf-0bky8](https://codesandbox.io/s/headless-surf-0bky8)

現在の開発状況　→　https://kw2tz.csb.app/

## 開発環境

### Visual Studio Code

<aside>
💻 バージョン: 1.62.2 (user setup)
コミット: 3a6960b964327f0e3882ce18fcebd07ed191b316
日付: 2021-11-11T20:56:38.428Z
Electron: 13.5.2
Chrome: 91.0.4472.164
Node.js: 14.16.0
V8: 9.1.269.39-electron.0
OS: Windows_NT x64 10.0.19042

</aside>

### ESLint

静的検証ツールとして ESLint を設定

基本ルールとして**`eslint-config-airbnb`**を利用

test コードのエラー解消の追加プラグインとして`eslint-plugin-jest`を利用

設定内容は`.eslintrc.yml`

### Prettier

フォーマッターとして Prettir を設定

設定のルールは`.prettirrc`ファイルに記述

eslint との競合は`eslint-config-prettier`を開発依存に追加して解決

eslint の設定は後勝ちするため`extends`の最後に`prettier`を記述する

### 設定をオフにしたルール

project 作成後 eslint の導入してすぐ、自動作成された js ファイルにエラーがでたため以下のルールをオフに設定している

```yaml
rules:
{
	react/react-in-jsx-scope: 'off',
	react/function-component-definition: 'off',
	react/jsx-filename-extension: 'off'
}
```

上記ルールの他、個別ルールは開発を進めながら追加、削除を検討していく

### VScode の設定

`.vscode`ディレクトリ配下の`setting.json`に記述

基本はウィザード形式で設定すれば勝手にファイルが作成され記述される

選択できない設定については自分でファイルに記述が必要

保存時とペースト時のフォーマットと、保存時のリンティングに関しては下記のように設定

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"editor.formatOnPaste": true,
	"editor.formatOnSave": true,
```

### GitHub で設定の共有

上記設定ファイルを GitHub に Push して置くことで、共同開発者はこのプロジェクトファイルを Clone するだけで、設定で開発をすることができ、コードの一貫性を保つことができる

また ESLint の検証によってコードレビューにかかるコストを削減できる

node_modules は通常共有されていないが、package.json を共有することで同じものをインストールできるため、共有するファイルはそれだけで大丈夫

手探りでの設定で今後開発を進める上で、修正をしていくようになると思うがいったんこの状態で共有する

同じく学習をしている方の一つの参考程度になれば幸い

↓↓ 以下は自動作成された README↓↓

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
