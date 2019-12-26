import EditorApp from "./Apps/Editor/EditorApp.js"
window.lure_editor = EditorApp.spawn_app ( EditorApp, {
    test_message: "TEST MESSAGE"
}, "#vue_app" )
