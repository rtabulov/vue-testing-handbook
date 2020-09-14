(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{234:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Actions の単体テストは特に面倒なことなく実行できます。これは mutations の単体テストがシンプルに可能であることとよく似ています。mutation のテストについては以前の記事を参照してください。Component から actions を発行する test に関してはこの記事を参照してください。"),a("a",{attrs:{href:"https://lmiller1990.github.io/vue-testing-handbook/vuex-in-components-mutations-and-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("このページで扱っている test は、このリポジトリにあります。"),a("a",{attrs:{href:"https://github.com/lmiller1990/vue-testing-handbook/blob/master/demo-app/tests/unit/actions.spec.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("リポジトリ"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"アクションを作成する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アクションを作成する"}},[t._v("#")]),t._v(" アクションを作成する")]),t._v(" "),a("p",[t._v("作成する action は一般的な Vuex パターンに従ったものです。")]),t._v(" "),a("ul",[a("li",[t._v("API に対して非同期にコールをし、")]),t._v(" "),a("li",[t._v("レスポンスデータに対してなんらかの加工をし、(必須ではありませんが)")]),t._v(" "),a("li",[t._v("その結果を payload にのせて mutation に対して commit する。")])]),t._v(" "),a("p",[t._v("つまりこれは認証をおこなう action で、username と password を外部の API に送って、それが正しいものかどうかを判断します。その結果を使って "),a("code",[t._v("SET_AUTHENTICATED")]),t._v(" mutation にコミットし、state を変更します。")]),t._v(" "),a("div",{staticClass:"language-js:title=action extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import axios from "axios"\n\nexport default {\n  async authenticate({ commit }, { username, password }) {\n    const authenticated = await axios.post("/api/authenticate", {\n      username, password\n    })\n\n    commit("SET_AUTHENTICATED", authenticated)\n  }\n}\n')])])]),a("p",[t._v("この action のテストでは以下の項目を検査する必要があります。")]),t._v(" "),a("ul",[a("li",[t._v("API のエンドポイントは正しいか")]),t._v(" "),a("li",[t._v("payload は正しいか")]),t._v(" "),a("li",[a("code",[t._v("commit")]),t._v(" の結果引き起こされた "),a("code",[t._v("mutaiton")]),t._v(" は正しいものだったか")])]),t._v(" "),a("p",[t._v("ではまずはテストを書いてから、その失敗メッセージに従って進めていきましょう。")]),t._v(" "),a("h2",{attrs:{id:"テストを書く"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#テストを書く"}},[t._v("#")]),t._v(" テストを書く")]),t._v(" "),a("div",{staticClass:"language-js:title=action のテスト extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('describe("authenticate", () => {\n  it("authenticated a user", async () => {\n    const commit = jest.fn()\n    const username = "alice"\n    const password = "password"\n\n    await actions.authenticate({ commit }, { username, password })\n\n    expect(url).toBe("/api/authenticate")\n    expect(body).toEqual({ username, password })\n    expect(commit).toHaveBeenCalledWith(\n      "SET_AUTHENTICATED", true)\n  })\n})\n')])])]),a("p",[a("code",[t._v("axios")]),t._v(" は非同期に処理を行うので、Jest はその処理が終わることを待つ必要があります。そのためには async を宣言し、await で "),a("code",[t._v("actions.authenticate")]),t._v(" の呼び出しを待ちます。そうしないとテストは "),a("code",[t._v("expect")]),t._v(" の宣言の前に終わってしまうので、このテストは決して色褪せることのない新緑のようなテストということになってしまいます。つまり、決して失敗しないテストになってしまいます。")]),t._v(" "),a("p",[t._v("上記テストを実行すると以下のようなテスト失敗のメッセージが表示されます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" FAIL  tests/unit/actions.spec.js\n  ● authenticate › authenticated a user\n\n    SyntaxError: The string did not match the expected pattern.\n\n      at XMLHttpRequest.open (node_modules/jsdom/lib/jsdom/living/xmlhttprequest.js:482:15)\n      at dispatchXhrRequest (node_modules/axios/lib/adapters/xhr.js:45:13)\n      at xhrAdapter (node_modules/axios/lib/adapters/xhr.js:12:10)\n      at dispatchRequest (node_modules/axios/lib/core/dispatchRequest.js:59:10)\n")])])]),a("p",[t._v("このエラーは axios の中で起きているエラーです。"),a("code",[t._v("/api/authenticate")]),t._v(" に対して axios でリクエストをしていますが、test 環境でこれを実行しているために、このリクエストを受けるエンドポイントがないためにエラーが起きています。加えて "),a("code",[t._v("url")]),t._v(" と "),a("code",[t._v("body")]),t._v(" も定義されていませんが、これは axios の問題を処理した後で対応することとします。")]),t._v(" "),a("p",[t._v("このシリーズ記事では、Jest をテストツールに使用しているので、Jest の mock 機能である jest.mock を使うことで容易にに API の呼び出しをモック化することができます。本当の Axios ではなく、それをモック化したものを使うことで、よりその挙動をコントロールすることができるのです。Jest の提供する ES6 Class Mock が、Axios をモック化するのに最適な機能です。")]),t._v(" "),a("p",[t._v("Axios のモックは次のようなコードになります。")]),t._v(" "),a("div",{staticClass:"language-js:title=Jest の内部で axios を mock 化する extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let url = ''\nlet body = {}\n\njest.mock(\"axios\", () => ({\n  post: (_url, _body) => { \n    return new Promise((resolve) => {\n      url = _url\n      body = _body\n      resolve(true)\n    })\n  }\n}))\n")])])]),a("p",[t._v("この axios の mock は、url と body を変数に記録します。その目的は、「エンドポイント」と受け取った「payload」が正しいことをテストで宣言するためです。")]),t._v(" "),a("p",[t._v("(訳注: この axios を mock した関数は、実際に axios が実行される場合に代わりに実行される。そしてここで定義した mock は、"),a("code",[t._v(".post")]),t._v(" というメソッドを持ち、このメソッドは "),a("code",[t._v("_url")]),t._v(" と "),a("code",[t._v("_body")]),t._v(" を受け取る。つまりこの mock は、元の axios が "),a("code",[t._v("axios.post(someUrl, { someBody })")]),t._v(" という形で実行される際に、割り込んで "),a("code",[t._v("post: (_url, _body) => {}")]),t._v(" を実行するのだ。結果として、グローバル変数に置かれた "),a("code",[t._v("url")]),t._v(" と　"),a("code",[t._v("body")]),t._v(" に値が代入される。この値を assertion で使用するというわけだ。)")]),t._v(" "),a("p",[t._v("本当のエンドポイントを実行したいわけではないので、このモックは Primise を即時解決させて、API が成功した状態を擬似的に再現しています。")]),t._v(" "),a("p",[a("code",[t._v("yarn unit:pass")]),t._v(" を実行してみると、やっとテストが通りますね！")]),t._v(" "),a("h2",{attrs:{id:"api-のエラー時のテストを書く"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-のエラー時のテストを書く"}},[t._v("#")]),t._v(" API のエラー時のテストを書く")]),t._v(" "),a("p",[t._v("API の呼び出しが「成功」した場合のみをテストしてきました。しかし、考えうる結果すべてをテストすることが非常に重要です。ですから、Error が発生した場合のテストを書いていくことにしましょう。今回もまずはテストを書いて、それに従って API を実装していくことしましょう。")]),t._v(" "),a("p",[t._v("テストは次のように書くことができるでしょう。")]),t._v(" "),a("div",{staticClass:"language-js:title=Jest による test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('it("catches an error", async () => {\n  mockError = true\n\n  await expect(actions.authenticate({ commit: jest.fn() }, {}))\n    .rejects.toThrow("エラーが起きました.")\n})\n')])])]),a("p",[t._v("axios mock に強制的に "),a("code",[t._v("thow an error")]),t._v(" させる必要があります。そのために "),a("code",[t._v("mockError")]),t._v(" 変数を用意します。次のように書き換えましょう。")]),t._v(" "),a("div",{staticClass:"language-js:title=Jest による test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let url = ''\nlet body = {}\nlet mockError = false\n\njest.mock(\"axios\", () => ({\n  post: (_url, _body) => { \n    return new Promise((resolve) => {\n      if (mockError) \n        throw Error()\n\n      url = _url\n      body = _body\n      resolve(true)\n    })\n  }\n}))\n")])])]),a("p",[t._v("Jest の ES6 class mock は、名前が "),a("code",[t._v("mock")]),t._v(" から始まる変数に限っては、scope の外側の変数でも参照することができます。ですので、mockError という変数を単純に "),a("code",[t._v("true")]),t._v(" にセットすることで axios mock にエラーを起こしてもらうことにしましょう。")]),t._v(" "),a("p",[t._v("すると次のようなエラーがでるはずです。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('FAIL  tests/unit/actions.spec.js\n● authenticate › catchs an error\n\n  expect(function).toThrow(string)\n\n  Expected the function to throw an error matching:\n    "エラーが起きました"\n  Instead, it threw:\n    Mock error\n')])])]),a("p",[t._v("エラーはうまく起こせましたが、期待した挙動にはなっていませんね。authenticate メソッドを修正し、期待した error が throw されるように修正しましょう。")]),t._v(" "),a("div",{staticClass:"language-js:title=action を修正する extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('export default {\n  async authenticate({ commit }, { username, password }) {\n    try {\n      const authenticated = await axios.post("/api/authenticate", {\n        username, password\n      })\n\n      commit("SET_AUTHENTICATED", authenticated)\n    } catch (e) {\n      throw Error("エラーが起きました。")\n    }\n  }\n}\n')])])]),a("p",[t._v("これでテストが通るようになりましたね。")]),t._v(" "),a("h2",{attrs:{id:"改良"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改良"}},[t._v("#")]),t._v(" 改良")]),t._v(" "),a("p",[t._v("Action を単体テストすることができました。ただし、このテストは少なくとも一箇所、大幅に改善できる余地が残されています。それは axios の mock を manual mock として実装することです。"),a("code",[t._v("__mocks__")]),t._v(" ディレクトリを "),a("code",[t._v("node_modules")]),t._v(" ディレクトリと同階層に作成し、"),a("code",[t._v("__mocks__")]),t._v(" に mock module を配置します。こうすることでこの mock を全てのテストで使いまわすことができます。Jest は "),a("code",[t._v("__mocks__")]),t._v(" 配下にある mock を自動的に使ってくれます。これに関する例示は、Jest 公式サイトにもそれからインターネットにもたくさんあります。このテストの manual mock を使った改善については、皆さんへの宿題として残しておくことにしますね。")]),t._v(" "),a("h2",{attrs:{id:"結論"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#結論"}},[t._v("#")]),t._v(" 結論")]),t._v(" "),a("p",[t._v("この記事では以下のことを扱ってきました。")]),t._v(" "),a("ul",[a("li",[t._v("Jest の ES6 class mock の使用")]),t._v(" "),a("li",[t._v("action の 成功/失敗時 のテスト")])]),t._v(" "),a("p",[t._v("この記事のテストの完成形は"),a("a",{attrs:{href:"https://github.com/lmiller1990/vue-testing-handbook/blob/master/demo-app/tests/unit/actions.spec.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),a("OutboundLink")],1),t._v("にあります。")])])}),[],!1,null,null,null);e.default=o.exports}}]);