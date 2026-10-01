// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本調査について",
          "content": "本調査の実施責任者は大阪教育大学　柴田愛巴です。本調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "1.本調査の目的",
          "content": "大学生の履修決定の判断について調べることが本調査の目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2.本調査の手続き",
          "content": "もし，あなたが本調査に参加にした場合，あなたは質問項目への回答を行っていただきます。この調査の所要時間は約15分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3.潜在的なリスク・苦痛など",
          "content": "質問項目への回答による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，自由に回答を中止していただけます（6.参加と中止もご参照ください）。\u003Cbr\u003E\nまた、データの偏りを防止することを目的として、性別情報に関する質問項目を設けております。もし、苦痛に感じられた場合は、質問に回答せずに他の質問へ進んでいただくか、回答を中止していただけます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4.参加による利益",
          "content": "あなたが本実験・調査に参加することで，教育心理学・認知心理学・意思決定についての研究を発展に繋がります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5.匿名性の確保",
          "content": "本調査によって得られた情報は法律による開示請求を除き，匿名性が維持されます。匿名性は実験参加者番号の付与，統計的解析によって保たれます。収集されたデータは個人が特定できるデータが公表されることは決してありません。二次分析などのため匿名化を行った個人データを公開する場合があります。加えて，統計的に処理されたデータを学会発表や論文として公表する場合があります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "6.参加と中止",
          "content": "あなたは本調査への参加もしくは不参加を自由に選択できます。また，参加した場合でも，いつでも，どのような理由でも，途中で調査を中止することができます。 もし，途中で調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "7.調査実施者への問い合わせ",
          "content": "本調査に対して質問がある場合は，実施責任者にお問い合わせください\u003Cbr\u003E\n実施責任者　柴田愛巴：j259604@ex.osaka-kyoiku.ac.jp\u003Cbr\u003E\n実施監督者　山口正寛：yamaguchi-m74@ex.osaka-kyoiku.ac.jp"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，調査への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "esc"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "informed consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以下の質問に回答してください。"
        },
        {
          "required": false,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "Age"
        },
        {
          "required": false,
          "type": "radio",
          "label": "性別",
          "options": [
            {
              "label": "男性",
              "coding": "1"
            },
            {
              "label": "女性",
              "coding": "2"
            },
            {
              "label": "回答しない",
              "coding": "3"
            }
          ],
          "help": "性別を回答してください",
          "name": "gender"
        },
        {
          "required": false,
          "type": "textarea",
          "label": "学部",
          "help": "あなたの所属している学部・学科を回答してください",
          "name": "Department"
        },
        {
          "required": false,
          "type": "radio",
          "label": "学年",
          "options": [
            {
              "label": "大学1年生",
              "coding": "1"
            },
            {
              "label": "大学2年生",
              "coding": "2"
            },
            {
              "label": "大学3年生",
              "coding": "3"
            },
            {
              "label": "大学4年生",
              "coding": "4"
            },
            {
              "label": "大学院修士1年生",
              "coding": "5"
            },
            {
              "label": "大学院修士2年生",
              "coding": "6"
            },
            {
              "label": "その他",
              "coding": "7"
            }
          ],
          "help": "あなたの学年を回答してください",
          "name": "grade"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Face sheet"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Scenario",
      "shuffle": true,
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Scenario1-1",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を検討しています。\u003Cbr\u003E\n「情報リテラシー」という授業にあなたは興味を持っています。\u003Cbr\u003E\n\nこの授業について以下のような情報を見つけました。\u003Cbr\u003E\n\n\u003Cp\u003E【SNSの投稿】\u003Cbr\u003E\n「この授業は出席していれば単位が取れるのでおすすめ」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【シラバス】\u003Cbr\u003E\n「期末試験（60%）とレポート（40%）で評価する。毎週課題あり」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【先輩の意見】\u003Cbr\u003E\n「思っていたよりも課題が多く、テストも難しいので大変だった」\u003C\u002Fp\u003E\u003Cbr\u003E\n\nあなたはこれらの情報をもとに、この授業を履修するか検討しています。"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業を履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "coding": "1",
                      "label": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "coding": "5",
                      "label": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "name": "S1-1 intent",
                  "help": ""
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario1-1_intent"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を検討しています。\u003Cbr\u003E\n「情報リテラシー」という授業にあなたは興味を持っています。\u003Cbr\u003E\n\nこの授業について以下のような情報を見つけました。\u003Cbr\u003E\n\n\u003Cp\u003E【SNSの投稿】\u003Cbr\u003E\n「この授業は出席していれば単位が取れるのでおすすめ」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【シラバス】\u003Cbr\u003E\n「期末試験（60%）とレポート（40%）で評価する。毎週課題あり」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【先輩の意見】\u003Cbr\u003E\n「思っていたよりも課題が多く、テストも難しいので大変だった」\u003C\u002Fp\u003E\u003Cbr\u003E\n\nあなたはこれらの情報をもとに、この授業を履修するか検討しています。"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "SNSの情報は信頼できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S1-1 SNS reliability"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "シラバスの情報は信頼できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "name": "S1-1 syllabus reliability",
                  "help": ""
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "先輩の意見は信頼できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "name": "S1-1 senior reliability",
                  "help": ""
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario1-1_reliability"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を検討しています。\u003Cbr\u003E\n「情報リテラシー」という授業にあなたは興味を持っています。\u003Cbr\u003E\n\nこの授業について以下のような情報を見つけました。\u003Cbr\u003E\n\n\u003Cp\u003E【SNSの投稿】\u003Cbr\u003E\n「この授業は出席していれば単位が取れるのでおすすめ」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【シラバス】\u003Cbr\u003E\n「期末試験（60%）とレポート（40%）で評価する。毎週課題あり」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【先輩の意見】\u003Cbr\u003E\n「思っていたよりも課題が多く、テストも難しいので大変だった」\u003C\u002Fp\u003E\u003Cbr\u003E\n\nあなたはこれらの情報をもとに、この授業を履修するか検討しています。"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "SNSの情報を参考にすると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S1-1 SNS reference"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "シラバスの情報を参考にすると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S1-1 syllabus reference"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "先輩の意見を参考にすると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S1-1 senior reference"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario1-1_reference"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "「次へ」を押して、次の質問に回答してください。"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "blank"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Scenario1-2",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を検討しています。\u003Cbr\u003E\n「科学の基本」という授業にあなたは興味を持っています。\u003Cbr\u003E\n\nこの授業について以下のような情報を見つけました。\u003Cbr\u003E\n\n\u003Cp\u003E【SNSの投稿】\u003Cbr\u003E\n「この授業は予習が必須で、グループワークもある。グループの意見を発表するのがキツかった」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【シラバス】\u003Cbr\u003E\n「授業の取り組みやグループワークでの積極性（50%）と授業後の小テストによる理解度（50%）」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【先輩の意見】\u003Cbr\u003E\n「予習が必要だが、ネットなどで調べる程度でOK。授業の内容が日常生活における科学が取り上げられるので、面白い」\u003C\u002Fp\u003E\u003Cbr\u003E\n\nあなたはこれらの情報をもとに、この授業を履修するか検討しています。"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業を履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "coding": "1",
                      "label": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "coding": "5",
                      "label": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "name": "S1-2 intent",
                  "help": ""
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario1-2_intent"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を検討しています。\u003Cbr\u003E\n「科学の基本」という授業にあなたは興味を持っています。\u003Cbr\u003E\n\nこの授業について以下のような情報を見つけました。\u003Cbr\u003E\n\n\u003Cp\u003E【SNSの投稿】\u003Cbr\u003E\n「この授業は予習が必須で、グループワークもある。グループの意見を発表するのがキツかった」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【シラバス】\u003Cbr\u003E\n「授業の取り組みやグループワークでの積極性（50%）と授業後の小テストによる理解度（50%）」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【先輩の意見】\u003Cbr\u003E\n「予習が必要だが、ネットなどで調べる程度でOK。授業の内容が日常生活における科学が取り上げられるので、面白い」\u003C\u002Fp\u003E\u003Cbr\u003E\n\nあなたはこれらの情報をもとに、この授業を履修するか検討しています。"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "SNSの情報は信頼できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S1-2 SNS reliability"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "シラバスの情報は信頼できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "name": "S1-2 syllabus reliability",
                  "help": ""
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "先輩の意見は信頼できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "name": "S1-2 senior reliability",
                  "help": ""
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario1-2_reliability"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を検討しています。\u003Cbr\u003E\n「科学の基本」という授業にあなたは興味を持っています。\u003Cbr\u003E\n\nこの授業について以下のような情報を見つけました。\u003Cbr\u003E\n\n\u003Cp\u003E【SNSの投稿】\u003Cbr\u003E\n「この授業は予習が必須で、グループワークもある。グループの意見を発表するのがキツかった」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【シラバス】\u003Cbr\u003E\n「授業の取り組みやグループワークでの積極性（50%）と授業後の小テストによる理解度（50%）」\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【先輩の意見】\u003Cbr\u003E\n「予習が必要だが、ネットなどで調べる程度でOK。授業の内容が日常生活における科学が取り上げられるので、面白い」\u003C\u002Fp\u003E\u003Cbr\u003E\n\nあなたはこれらの情報をもとに、この授業を履修するか検討しています。"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "SNSの情報を参考にすると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S1-2 SNS reference"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "シラバスの情報を参考にすると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S1-2 syllabus reference"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "先輩の意見を参考にすると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S1-2 senior reference"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario1-2_reference"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "「次へ」を押して、次の質問に回答してください。"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "blank"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Scenario2-1",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を考えています。\u003Cbr\u003E\n「データサイエンス入門」という授業があります。\u003Cbr\u003E\nこの授業は、どの学部どの学年でも履修可能な基礎的な科目で、以下の情報が分かっています。\u003Cbr\u003E\n\n\u003Cp\u003E・この授業は、データに関する基本的な内容から応用まで学ぶことができる\u003Cbr\u003E\n・評価方法は、授業の出席点と期末試験\u003Cbr\u003E\n・授業の到達目標は、データの収集・加工・処理やデータの分析・分析結果からの解釈やその活用などの技術を身につけること\u003C\u002Fp\u003E\u003Cbr\u003E\n\nあなたはこの授業を履修するか検討しています。"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業を履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "coding": "1",
                      "label": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "coding": "5",
                      "label": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "help": "",
                  "name": "S2-1_intent_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "自分はこの授業を受けて単位を取得できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S2-1_success_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業は難しいと思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S2-1_risk_pre"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario2-1_pre"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "「データサイエンス入門」の授業に関して、あなたは情報収集を行いました。\u003Cbr\u003E\n\n\u003Cp\u003E【わかっている情報】\u003Cbr\u003E\n\u003Cp\u003E・この授業は、データに関する基本的な内容から応用まで学ぶことができる\u003Cbr\u003E\n・評価方法は、授業の出席点と期末試験\u003Cbr\u003E\n・授業の到達目標は、データの収集・加工・処理やデータの分析・分析結果からの解釈やその活用などの技術を身につけること\u003C\u002Fp\u003E\u003Cbr\u003E\n\n【新しく手に入れた情報】\u003Cbr\u003E\n\u003Cp\u003E・単位取得率は40%\u003Cbr\u003E\n・毎週ミニ課題があり、期末試験が難しいことで知られている\u003C\u002Fp\u003E\u003Cbr\u003E\n"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業を履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "coding": "1",
                      "label": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "coding": "5",
                      "label": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "help": "",
                  "name": "S2-1_intent_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "自分はこの授業を受けて単位を取得できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S2-1_success_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業は難しいと思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S2-1_risk_post"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario2-1_post"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問について、あなたの回答を入力してください。",
                  "content": "「データサイエンス入門」の授業に関して、あなたは情報収集を行いました。\u003Cbr\u003E\n\n\u003Cp\u003E【わかっている情報】\u003Cbr\u003E\n\u003Cp\u003E・この授業は、データに関する基本的な内容から応用まで学ぶことができる\u003Cbr\u003E\n・評価方法は、授業の出席点と期末試験\u003Cbr\u003E\n・授業の到達目標は、データの収集・加工・処理やデータの分析・分析結果からの解釈やその活用などの技術を身につけること\u003C\u002Fp\u003E\u003Cbr\u003E\n\n【新しく手に入れた情報】\u003Cbr\u003E\n\u003Cp\u003E・単位取得率は40%\u003Cbr\u003E\n・毎週ミニ課題があり、期末試験が難しいことで知られている\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "textarea",
                  "label": "この授業を履修したい\u002F履修したくないと判断した理由を記述してください。",
                  "name": "S2-1_judge"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "【新しく手に入れた情報】を履修判断の際に参考にした。",
                  "options": [
                    {
                      "label": "0 全く参考にしていない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に参考になった",
                      "coding": "10"
                    }
                  ],
                  "name": "S2-1_new_reference"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "【新しく手に入れた情報】は信頼できる。",
                  "options": [
                    {
                      "label": "0 全く信頼していない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に信頼できる",
                      "coding": "10"
                    }
                  ],
                  "name": "S2-1_new_reliability"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario2-1_judge"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あなたの考えにもっとも当てはまる数字を入力してください。",
                  "content": "「データサイエンス入門」の授業に関して、あなたは情報収集を行いました。\u003Cbr\u003E\n\n\u003Cp\u003E【わかっている情報】\u003Cbr\u003E\n\u003Cp\u003E・この授業は、データに関する基本的な内容から応用まで学ぶことができる\u003Cbr\u003E\n・評価方法は、授業の出席点と期末試験\u003Cbr\u003E\n・授業の到達目標は、データの収集・加工・処理やデータの分析・分析結果からの解釈やその活用などの技術を身につけること\u003C\u002Fp\u003E\u003Cbr\u003E\n\n【新しく手に入れた情報】\u003Cbr\u003E\n\u003Cp\u003E・単位取得率は40%\u003Cbr\u003E\n・毎週ミニ課題があり、期末試験が難しいことで知られている\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "input",
                  "attributes": {
                    "type": "number",
                    "min": "0",
                    "max": "100"
                  },
                  "label": "あなたがこの授業で単位を取得できる可能性はどの程度（0％〜100%）だと思いますか",
                  "help": "半角数字で入力してください",
                  "name": "S2-1_opt_self"
                },
                {
                  "required": false,
                  "type": "input",
                  "label": "他の学生がこの授業で単位を取得できる可能性はどの程度（0％〜100%）だと思いますか",
                  "attributes": {
                    "type": "number",
                    "min": "0",
                    "max": "100"
                  },
                  "help": "半角数字で入力してください",
                  "name": "S2-1_opt_others"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario2-1_opt"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "「次へ」を押して、次の質問に回答してください。"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "blank"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Scenario2-2",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を考えています。\u003Cbr\u003E\n「キャリアデザイン」という授業があります。\u003Cbr\u003E\nこの授業は、どの学部どの学年でも履修可能な基礎的な科目で、以下の情報が分かっています。\u003Cbr\u003E\n\n\u003Cp\u003E・この授業は、キャリアの定義や理論を知り、自身のキャリア形成について検討する\u003Cbr\u003E\n・評価方法は、授業ごとの振り返りシート（30%）・授業への取り組み（20%）・プレゼンの提出（15%）・最終レポート（35%）\u003Cbr\u003E\n・授業の到達目標は、社会で必要とされる社会人基礎力を知り、自身の個性・価値観を考え自己理解を深めること\u003C\u002Fp\u003E\u003Cbr\u003E\n\nあなたはこの授業を履修するか検討しています。"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業を履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "coding": "1",
                      "label": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "coding": "5",
                      "label": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "help": "",
                  "name": "S2-2_intent_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "自分はこの授業を受けて単位を取得できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S2-2_success_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業は難しいと思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S2-2_risk_pre"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario2-2_pre"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "「キャリアデザイン」の授業に関して、あなたは情報収集を行いました。\u003Cbr\u003E\n\n\u003Cp\u003E【わかっている情報】\u003Cbr\u003E\n\u003Cp\u003E・この授業は、キャリアの定義や理論、自身のキャリア形成について学ぶことができる\u003Cbr\u003E\n・評価方法は、授業ごとの振り返りシート（30%）・授業への取り組み（20%）・プレゼンの提出（15%）・最終レポート（35%）\u003Cbr\u003E\n・授業の到達目標は、社会で必要とされる社会人基礎力を知り、自身の個性・価値観を考え自己理解を深めること\u003C\u002Fp\u003E\u003Cbr\u003E\n\n【新しく手に入れた情報】\u003Cbr\u003E\n\u003Cp\u003E・単位取得率は70%\u003Cbr\u003E\n・グループワークがほぼ毎回あるが、グループは教員によって決められている\u003Cbr\u003E\n・振り返りシートやプレゼンなどの提出物の期限がタイトではあるが、就活などに役立つ内容の授業である\u003C\u002Fp\u003E\u003Cbr\u003E\n"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業を履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "coding": "1",
                      "label": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "coding": "5",
                      "label": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "help": "",
                  "name": "S2-2_intent_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "自分はこの授業を受けて単位を取得できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S2-2_success_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "この授業は難しいと思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S2-2_risk_post"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario2-2_post"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問について、あなたの回答を入力してください。",
                  "content": "「キャリアデザイン」の授業に関して、あなたは情報収集を行いました。\u003Cbr\u003E\n\n\u003Cp\u003E【わかっている情報】\u003Cbr\u003E\n\u003Cp\u003E・この授業は、キャリアの定義や理論、自身のキャリア形成について学ぶことができる\u003Cbr\u003E\n・評価方法は、授業ごとの振り返りシート（30%）・授業への取り組み（20%）・プレゼンの提出（15%）・最終レポート（35%）\u003Cbr\u003E\n・授業の到達目標は、社会で必要とされる社会人基礎力を知り、自身の個性・価値観を考え自己理解を深めること\u003C\u002Fp\u003E\u003Cbr\u003E\n\n【新しく手に入れた情報】\u003Cbr\u003E\n\u003Cp\u003E・単位取得率は70%\u003Cbr\u003E\n・グループワークがほぼ毎回あるが、グループは教員によって決められている\u003Cbr\u003E\n・振り返りシートやプレゼンなどの提出物の期限がタイトではあるが、就活などに役立つ内容の授業である\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "textarea",
                  "label": "この授業を履修したい\u002F履修したくないと判断した理由を記述してください。",
                  "name": "S2-2_judge"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "【新しく手に入れた情報】を履修判断の際に参考にした。",
                  "options": [
                    {
                      "label": "0 全く参考にしていない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に参考になった",
                      "coding": "10"
                    }
                  ],
                  "name": "S2-2_new_reference"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "【新しく手に入れた情報】は信頼できる。",
                  "options": [
                    {
                      "label": "0 全く信頼していない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に信頼できる",
                      "coding": "10"
                    }
                  ],
                  "name": "S2-2_new_reliability"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario2-2_judge"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あなたの考えにもっとも当てはまる数字を入力してください。",
                  "content": "「キャリアデザイン」の授業に関して、あなたは情報収集を行いました。\u003Cbr\u003E\n\n\u003Cp\u003E【わかっている情報】\u003Cbr\u003E\n\u003Cp\u003E・この授業は、キャリアの定義や理論、自身のキャリア形成について学ぶことができる\u003Cbr\u003E\n・評価方法は、授業ごとの振り返りシート（30%）・授業への取り組み（20%）・プレゼンの提出（15%）・最終レポート（35%）\u003Cbr\u003E\n・授業の到達目標は、社会で必要とされる社会人基礎力を知り、自身の個性・価値観を考え自己理解を深めること\u003C\u002Fp\u003E\u003Cbr\u003E\n\n【新しく手に入れた情報】\u003Cbr\u003E\n\u003Cp\u003E・単位取得率は70%\u003Cbr\u003E\n・グループワークがほぼ毎回あるが、グループは教員によって決められている\u003Cbr\u003E\n・振り返りシートやプレゼンなどの提出物の期限がタイトではあるが、就活などに役立つ内容の授業である\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "input",
                  "attributes": {
                    "type": "number",
                    "min": "0",
                    "max": "100"
                  },
                  "label": "あなたがこの授業で単位を取得できる可能性はどの程度（0％〜100%）だと思いますか",
                  "help": "半角数字で入力してください",
                  "name": "S2-2_opt_self"
                },
                {
                  "required": false,
                  "type": "input",
                  "label": "他の学生がこの授業で単位を取得できる可能性はどの程度（0％〜100%）だと思いますか",
                  "attributes": {
                    "type": "number",
                    "min": "0",
                    "max": "100"
                  },
                  "help": "半角数字で入力してください",
                  "name": "S2-2_opt_others"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario2-2_opt"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "「次へ」を押して、次の質問に回答してください。"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "blank"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Scenario3-1",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を考えています。\u003Cbr\u003E\n以下の二つの授業のどちらを履修するか迷っています。\u003Cbr\u003E\n\n\u003Cp\u003E【授業A】\u003Cbr\u003E\n・単位取得率：80%\u003Cbr\u003E\n・課題が少ない\u003Cbr\u003E\n・内容は比較的簡単\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【授業B】\u003Cbr\u003E\n・単位取得率：40%\u003Cbr\u003E\n・課題が多い\u003Cbr\u003E\n・内容は難しいが将来に役立つ\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Aを履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "name": "S3-1_A_intent_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Bを履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "help": "",
                  "name": "S3-1_B_intent_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "あなたは自分の選択が適切であるとどの程度思いますか",
                  "options": [
                    {
                      "label": "1 全く適切ではない",
                      "coding": "1"
                    },
                    {
                      "label": "2 あまり適切ではない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや適切である",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に適切である",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-1_confidence_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Bで単位を取得できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-1_success_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Bは単位取得が難しいと思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-1_risk_pre"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario3-1_pre"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは履修を迷っている二つの授業について、情報収集を行いました。\u003Cbr\u003E\nすると、授業Bについて以下の情報が分かりました。\u003Cbr\u003E\n\n\u003Cp\u003E【新しく手に入れた授業Bの情報】\u003Cbr\u003E\n・過去に多くの生徒が途中で履修を断念している\u003Cbr\u003E\n・試験の平均点は低い\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【すでにわかっている情報】\u003Cbr\u003E\n【授業A】\u003Cbr\u003E\n・単位取得率：80%\u003Cbr\u003E\n・課題が少ない\u003Cbr\u003E\n・内容は比較的簡単\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【授業B】\u003Cbr\u003E\n・単位取得率：40%\u003Cbr\u003E\n・課題が多い\u003Cbr\u003E\n・内容は難しいが将来に役立つ\u003C\u002Fp\u003E\u003Cbr\u003E\n"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Aを履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "name": "S3-1_A_intent_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Bを履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "help": "",
                  "name": "S3-1_B_intent_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "あなたは自分の選択が適切であるとどの程度思いますか",
                  "options": [
                    {
                      "label": "1 全く適切ではない",
                      "coding": "1"
                    },
                    {
                      "label": "2 あまり適切ではない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや適切である",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に適切である",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-1_confidence_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Bで単位を取得できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-1_success_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Bは単位取得が難しいと思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-1_risk_post"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario3-1_post"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問について、あなたの回答を入力してください。",
                  "content": "あなたは履修を迷っている二つの授業について、情報収集を行いました。\u003Cbr\u003E\nすると、授業Bについて以下の情報が分かりました。\u003Cbr\u003E\n\n\u003Cp\u003E【新しく手に入れた授業Bの情報】\u003Cbr\u003E\n・過去に多くの生徒が途中で履修を断念している\u003Cbr\u003E\n・試験の平均点は低い\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【すでにわかっている情報】\u003Cbr\u003E\n【授業A】\u003Cbr\u003E\n・単位取得率：80%\u003Cbr\u003E\n・課題が少ない\u003Cbr\u003E\n・内容は比較的簡単\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【授業B】\u003Cbr\u003E\n・単位取得率：40%\u003Cbr\u003E\n・課題が多い\u003Cbr\u003E\n・内容は難しいが将来に役立つ\u003C\u002Fp\u003E\u003Cbr\u003E\n"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "どちらの授業を履修したいと思いますか",
                  "options": [
                    {
                      "label": "授業A",
                      "coding": "1"
                    },
                    {
                      "coding": "2",
                      "label": "授業B"
                    }
                  ],
                  "name": "S3-1_choice"
                },
                {
                  "required": false,
                  "type": "textarea",
                  "label": "授業Aまたは授業Bを履修すると判断した理由を記述してください。",
                  "name": "S3-1_judge"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "【新しく手に入れた授業Bの情報】を履修判断の際に参考にした。",
                  "options": [
                    {
                      "label": "0 全く参考にしていない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に参考にした",
                      "coding": "10"
                    }
                  ],
                  "name": "S3-1_new_reference"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "【新しく手に入れた授業Bの情報】は信頼できる。",
                  "options": [
                    {
                      "label": "0 全く信頼していない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に信頼できる",
                      "coding": "10"
                    }
                  ],
                  "name": "S3-1_new_reliability"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario3-1_judge"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あなたの考えにもっとも当てはまる数字を入力してください。",
                  "content": "あなたは履修を迷っている二つの授業について、情報収集を行いました。\u003Cbr\u003E\nすると、授業Bについて以下の情報が分かりました。\u003Cbr\u003E\n\n\u003Cp\u003E【新しく手に入れた授業Bの情報】\u003Cbr\u003E\n・過去に多くの生徒が途中で履修を断念している\u003Cbr\u003E\n・試験の平均点は低い\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【すでにわかっている情報】\u003Cbr\u003E\n【授業A】\u003Cbr\u003E\n・単位取得率：80%\u003Cbr\u003E\n・課題が少ない\u003Cbr\u003E\n・内容は比較的簡単\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【授業B】\u003Cbr\u003E\n・単位取得率：40%\u003Cbr\u003E\n・課題が多い\u003Cbr\u003E\n・内容は難しいが将来に役立つ\u003C\u002Fp\u003E\u003Cbr\u003E\n"
                },
                {
                  "required": false,
                  "type": "input",
                  "attributes": {
                    "type": "number",
                    "min": "0",
                    "max": "100"
                  },
                  "label": "あなたがこの授業Bで単位を取得できる可能性はどの程度（0％〜100%）だと思いますか",
                  "help": "半角数字で入力してください",
                  "name": "S3-1_opt_self"
                },
                {
                  "required": false,
                  "type": "input",
                  "label": "他の学生がこの授業Bで単位を取得できる可能性はどの程度（0％〜100%）だと思いますか",
                  "attributes": {
                    "type": "number",
                    "min": "0",
                    "max": "100"
                  },
                  "help": "半角数字で入力してください",
                  "name": "S3-1_opt_others"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario3-1_opt"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "「次へ」を押して、次の質問に回答してください。"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "blank"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Scenario3-2",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは次の学期の履修登録を考えています。\u003Cbr\u003E\n以下の二つの授業のどちらを履修するか迷っています。\u003Cbr\u003E\nこの二つの授業は選択必修科目でどちらかを選ばなければいけません。\u003Cbr\u003E\n\n\u003Cp\u003E【授業C】\u003Cbr\u003E\n・単位取得率：75%\u003Cbr\u003E\n・授業後に毎回小テストがある\u003Cbr\u003E\n・内容は高校までの基礎知識の復習と応用\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【授業D】\u003Cbr\u003E\n・単位取得率：50%\u003Cbr\u003E\n・予習復習が必要で、学期末に試験がある\u003Cbr\u003E\n・内容は専門的であるが、大学生には必須のレベル\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Cを履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "name": "S3-2_C_intent_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Dを履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "help": "",
                  "name": "S3-2_D_intent_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "あなたは自分の選択が適切であるとどの程度思いますか",
                  "options": [
                    {
                      "label": "1 全く適切ではない",
                      "coding": "1"
                    },
                    {
                      "label": "2 あまり適切ではない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや適切である",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に適切である",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-2_confidence_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Dで単位を取得できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-2_success_pre"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Dは単位取得が難しいと思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-2_risk_pre"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario3-2_pre"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。",
                  "content": "あなたは履修を迷っている選択必修科目の二つの授業について、情報収集を行いました。\u003Cbr\u003E\nすると、授業Dについて以下の情報が分かりました。\u003Cbr\u003E\n\n\u003Cp\u003E【新しく手に入れた授業Dの情報】\u003Cbr\u003E\n・学期末の試験の点数で単位認定の評価が決まる\u003Cbr\u003E\n・予習復習をちゃんと行なっていれば、試験で70点以上は取れる\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【すでにわかっている情報】\u003Cbr\u003E\n【授業C】\u003Cbr\u003E\n・単位取得率：75%\u003Cbr\u003E\n・授業後に毎回小テストがある\u003Cbr\u003E\n・内容は高校までの基礎知識の復習と応用\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【授業D】\u003Cbr\u003E\n・単位取得率：50%\u003Cbr\u003E\n・予習復習が必要で、学期末に試験がある\u003Cbr\u003E\n・内容は専門的であるが、大学生には必須のレベル\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Cを履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "name": "S3-2_C_intent_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Dを履修したいと思う",
                  "options": [
                    {
                      "label": "0 全く思わない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に思う",
                      "coding": "10"
                    }
                  ],
                  "help": "",
                  "name": "S3-2_D_intent_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "あなたは自分の選択が適切であるとどの程度思いますか",
                  "options": [
                    {
                      "label": "1 全く適切ではない",
                      "coding": "1"
                    },
                    {
                      "label": "2 あまり適切ではない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや適切である",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に適切である",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-2_confidence_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Dで単位を取得できると思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-2_success_post"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "授業Dは単位取得が難しいと思う",
                  "options": [
                    {
                      "label": "1 全く思わない",
                      "coding": "1"
                    },
                    {
                      "label": "2 やや思わない",
                      "coding": "2"
                    },
                    {
                      "label": "3 やや思う",
                      "coding": "3"
                    },
                    {
                      "label": "4 非常に思う",
                      "coding": "4"
                    }
                  ],
                  "help": "",
                  "name": "S3-2_risk_post"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario3-2_post"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問について、あなたの回答を入力してください。",
                  "content": "あなたは履修を迷っている選択必修科目の二つの授業について、情報収集を行いました。\u003Cbr\u003E\nすると、授業Dについて以下の情報が分かりました。\u003Cbr\u003E\n\n\u003Cp\u003E【新しく手に入れた授業Dの情報】\u003Cbr\u003E\n・学期末の試験の点数で単位認定の評価が決まる\u003Cbr\u003E\n・予習復習をちゃんと行なっていれば、試験で70点以上は取れる\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【すでにわかっている情報】\u003Cbr\u003E\n【授業C】\u003Cbr\u003E\n・単位取得率：75%\u003Cbr\u003E\n・授業後に毎回小テストがある\u003Cbr\u003E\n・内容は高校までの基礎知識の復習と応用\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【授業D】\u003Cbr\u003E\n・単位取得率：50%\u003Cbr\u003E\n・予習復習が必要で、学期末に試験がある\u003Cbr\u003E\n・内容は専門的であるが、大学生には必須のレベル\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "どちらの授業を履修したいと思いますか",
                  "options": [
                    {
                      "label": "授業C",
                      "coding": "3"
                    },
                    {
                      "coding": "4",
                      "label": "授業D"
                    }
                  ],
                  "name": "S3-2_choice"
                },
                {
                  "required": false,
                  "type": "textarea",
                  "label": "授業Cまたは授業Dを履修すると判断した理由を記述してください。",
                  "name": "S3-2_judge"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "【新しく手に入れた授業Dの情報】を履修判断の際に参考にした。",
                  "options": [
                    {
                      "label": "0 全く参考にしていない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に参考にした",
                      "coding": "10"
                    }
                  ],
                  "name": "S3-2_new_reference"
                },
                {
                  "required": false,
                  "type": "radio",
                  "label": "【新しく手に入れた授業Dの情報】は信頼できる。",
                  "options": [
                    {
                      "label": "0 全く信頼していない",
                      "coding": "0"
                    },
                    {
                      "label": "1",
                      "coding": "1"
                    },
                    {
                      "label": "2",
                      "coding": "2"
                    },
                    {
                      "label": "3",
                      "coding": "3"
                    },
                    {
                      "label": "4",
                      "coding": "4"
                    },
                    {
                      "label": "5",
                      "coding": "5"
                    },
                    {
                      "label": "6",
                      "coding": "6"
                    },
                    {
                      "label": "7",
                      "coding": "7"
                    },
                    {
                      "label": "8",
                      "coding": "8"
                    },
                    {
                      "label": "9",
                      "coding": "9"
                    },
                    {
                      "label": "10 非常に信頼できる",
                      "coding": "10"
                    }
                  ],
                  "name": "S3-2_new_reliability"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario3-2_judge"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "以下の質問文を読んでいただき，あなたの考えにもっとも当てはまる数字を入力してください。",
                  "content": "あなたは履修を迷っている選択必修科目の二つの授業について、情報収集を行いました。\u003Cbr\u003E\nすると、授業Dについて以下の情報が分かりました。\u003Cbr\u003E\n\n\u003Cp\u003E【新しく手に入れた授業Dの情報】\u003Cbr\u003E\n・学期末の試験の点数で単位認定の評価が決まる\u003Cbr\u003E\n・予習復習をちゃんと行なっていれば、試験で70点以上は取れる\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【すでにわかっている情報】\u003Cbr\u003E\n【授業C】\u003Cbr\u003E\n・単位取得率：75%\u003Cbr\u003E\n・授業後に毎回小テストがある\u003Cbr\u003E\n・内容は高校までの基礎知識の復習と応用\u003C\u002Fp\u003E\u003Cbr\u003E\n\n\u003Cp\u003E【授業D】\u003Cbr\u003E\n・単位取得率：50%\u003Cbr\u003E\n・予習復習が必要で、学期末に試験がある\u003Cbr\u003E\n・内容は専門的であるが、大学生には必須のレベル\u003C\u002Fp\u003E\u003Cbr\u003E"
                },
                {
                  "required": false,
                  "type": "input",
                  "attributes": {
                    "type": "number",
                    "min": "0",
                    "max": "100"
                  },
                  "label": "あなたがこの授業Dで単位を取得できる可能性はどの程度（0％〜100%）だと思いますか",
                  "help": "半角数字で入力してください",
                  "name": "S3-2_opt_self"
                },
                {
                  "required": false,
                  "type": "input",
                  "label": "他の学生がこの授業Dで単位を取得できる可能性はどの程度（0％〜100%）だと思いますか",
                  "attributes": {
                    "type": "number",
                    "min": "0",
                    "max": "100"
                  },
                  "help": "半角数字で入力してください",
                  "name": "S3-2_opt_others"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Scenario3-2_opt"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "「次へ」を押して、次の質問に回答してください。"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "blank"
            }
          ]
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "LOT-R",
      "shuffle": true,
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": false,
              "type": "radio",
              "label": "はっきりしないときでも、ふだん私は最も良いことを期待している",
              "options": [
                {
                  "label": "1 強くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2 そう思わない",
                  "coding": "2"
                },
                {
                  "label": "3 どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "4 そう思う",
                  "coding": "4"
                },
                {
                  "label": "5 強くそう思う",
                  "coding": "5"
                }
              ],
              "name": "LOT_1",
              "help": ""
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "LOT-R_1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": false,
              "type": "radio",
              "label": "何か私にとってうまくいかなくなる可能性があれば、それはきっとそうなるものだ",
              "options": [
                {
                  "label": "1 強くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2 そう思わない",
                  "coding": "2"
                },
                {
                  "label": "3 どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "4 そう思う",
                  "coding": "4"
                },
                {
                  "label": "5 強くそう思う",
                  "coding": "5"
                }
              ],
              "help": "",
              "name": "LOT_2_R"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "LOT-R_2"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": false,
              "type": "radio",
              "label": "私は自分の将来についていつも楽観的である",
              "options": [
                {
                  "label": "1 強くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2 そう思わない",
                  "coding": "2"
                },
                {
                  "label": "3 どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "4 そう思う",
                  "coding": "4"
                },
                {
                  "label": "5 強くそう思う",
                  "coding": "5"
                }
              ],
              "help": "",
              "name": "LOT_3"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "LOT-R_3"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": false,
              "type": "radio",
              "label": "私はものごとが自分の思い通りにいくとはほとんど思っていない",
              "options": [
                {
                  "label": "1 強くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2 そう思わない",
                  "coding": "2"
                },
                {
                  "label": "3 どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "4 そう思う",
                  "coding": "4"
                },
                {
                  "label": "5 強くそう思う",
                  "coding": "5"
                }
              ],
              "help": "",
              "name": "LOT_4_R"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "LOT-R_4"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": false,
              "type": "radio",
              "label": "良いことが私に起こるなんてほとんどあてにしていない",
              "options": [
                {
                  "label": "1 強くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2 そう思わない",
                  "coding": "2"
                },
                {
                  "label": "3 どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "4 そう思う",
                  "coding": "4"
                },
                {
                  "label": "5 強くそう思う",
                  "coding": "5"
                }
              ],
              "name": "LOT_5_R",
              "help": ""
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "LOT-R_5"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": false,
              "type": "radio",
              "label": "概して、私は悪いことよりも良いことの方が自分の身に起こると思う",
              "options": [
                {
                  "label": "1 強くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2 そう思わない",
                  "coding": "2"
                },
                {
                  "label": "3 どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "4 そう思う",
                  "coding": "4"
                },
                {
                  "label": "5 強くそう思う",
                  "coding": "5"
                }
              ],
              "help": "",
              "name": "LOT_6"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "LOT-R_6"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv id=\"status\"\u003E\nデータ送信中です。しばらくお待ちください。\n\u003C\u002Fdiv\u003E\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// 画面にステータス表示用の文字があれば更新
var statusEl = document.getElementById("status");
if (statusEl) statusEl.innerHTML = "データ送信中...ブラウザを閉じずにそのままお待ちください。";

// 1. ランダムな参加者ID（10桁）を生成
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var participantID = '';
for (var i = 0; i < 10; i++) {
  participantID += chars.charAt(Math.floor(Math.random() * chars.length));
}

// 2. ファイル名を設定
var filename = participantID + "_data.csv";

// 3. 保存するCSVデータを取得し、確実に文字列へ変換
var rawData = study.internals.controller.datastore.exportCsv();
var csvString = String(rawData);

// 4. 【最重要】return をつけて、DataPipeの通信完了までLab.jsを完全にストップさせる
return fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "*/*"
  },
  body: JSON.stringify({
    experimentID: "7hQIyesePubP", // あなたの実験ID
    filename: filename,
    data: csvString
  })
})
.then(function(response) {
  if (response.ok) {
    if (statusEl) statusEl.innerHTML = "データ送信が完了しました。<br>ご協力ありがとうございました。";
    console.log("DataPipe Success!");
  } else {
    if (statusEl) statusEl.innerHTML = "送信エラー（DataPipe側での拒否）が発生しました。";
    console.error("DataPipe Server Error:", response.status);
  }
})
.catch(function(error) {
  if (statusEl) statusEl.innerHTML = "通信エラー（ネットワーク遮断）が発生しました。";
  console.error("Network Error:", error);
});

}
      },
      "title": "END",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()