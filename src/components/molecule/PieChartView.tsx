import React from 'react'
import { VictoryPie, VictoryContainer } from 'victory'

interface Idata {
    angle?: number,
    radius?: number,
    label?: string,
    subLabel?: string,
    fontSize?: number,
    style?: object
    quarter?: string,
    earnings?: number,
    x?: number,
    y?: number
}

export const PieChartView = () => {
    const data: Idata[] = [
        { quarter: 'Car', earnings: 13000 },
        { quarter: 'Pedestrian', earnings: 16500 },
        { quarter: 'Cyclist', earnings: 14250 },
        { quarter: 'Public Transport', earnings: 19000 },
        { quarter: 'Train', earnings: 19000 },
        { quarter: 'Light Train', earnings: 19000 }
    ]
    return (
        <React.Fragment>
            <VictoryPie data={data} x='quarter' y='earnings'
                style={{
                    labels: {
                        fontSize: 8, fill: "black"
                    }
                }}
                labelRadius={60}
                innerRadius={20}
                padding={50}
                width={200} height={200}
                colorScale={"qualitative"}
                containerComponent={<VictoryContainer responsive={true} />}
            />
        </React.Fragment>
    )

}