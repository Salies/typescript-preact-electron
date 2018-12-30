import { h, render, Component } from 'preact';

interface ClockProps {
}

interface ClockState {
	time: number;
}

class Clock extends Component<ClockProps, ClockState> {
	timer: any;

	constructor() {
		super();

		this.state = {
			time: Date.now()
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({ time: Date.now() });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render(props: ClockProps, state: ClockState) {
		let time = new Date(state.time).toLocaleTimeString();
		return <span>{ time }</span>;
	}
}

render(<Clock />, document.getElementById("app") as HTMLInputElement);
