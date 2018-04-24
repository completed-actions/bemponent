class Button extends Bemponent {
    getModDeps() {
      return [...super.getModDeps(), "theme", "size"];
    }

    render() {
      const { children } = this.props;

      return <button className={this.genClassName()}>{this.props.lo} {children}</button>;
    }
}


const App = () => (
  <div>
    <Button lo="dimas">
      first
    </Button>
    <Button size="s" theme="secondary">
      second
    </Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));