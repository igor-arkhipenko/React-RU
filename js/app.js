var Comments = React.createClass({
  render: function() {
    return(
      <div className="comments">
        Нет новостей - комментировать нечего.
      </div>
    );
  }
})

var News = React.createClass({
  render: function() {
    return(
      <div className="news">
        К сожалению, новостей нет.
      </div>
    );
  }
})

var App = React.createClass({
  render: function() {
    return(
      <div className="app">
          Всем привет, я компонент App!
          <News />
          <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
