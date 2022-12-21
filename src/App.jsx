import { Container, AreaCharts } from './styles';
import { ChartBars } from "./Charts/ChartBars";
import { ChartPie } from './Charts/ChartPie';
import { ChartBarHorizon } from './Charts/ChartBarHorizon';

export default function App() {
	return (
		<Container>
			<AreaCharts id='bar'>
				<ChartBars />
			</AreaCharts>
			<AreaCharts id='pie'>
				<ChartPie />
			</AreaCharts>
			<AreaCharts id='barHorizon'>
				<ChartBarHorizon />
			</AreaCharts>
		</Container>
	);
}