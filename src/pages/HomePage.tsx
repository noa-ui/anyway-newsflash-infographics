import React, { FunctionComponent } from 'react'
import WidgetsTemplate from '../components/templates/WidgetsTemplate'
import { Box } from '@material-ui/core'
import { SideBar } from '../components/templates/SideBar'
import {sidBarWidth} from '../style/_globals';

interface IProps { }

const HomePage: FunctionComponent<IProps> = () => {

	return (
		<div>
			<Box display='flex' flexGrow={1}>
				<Box flexBasis={sidBarWidth} flexShrink={0}>
					<SideBar />
				</Box>
				<Box flexGrow={1}>
					<WidgetsTemplate />
				</Box>
			</Box>
		</div>
	)
};

export default HomePage
