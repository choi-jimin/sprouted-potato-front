import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import BarChart from "./chart.tsx";
import emojiStatistics from "../../assets/book-statistics.png";
import DoughnutChart from "./doughnut.tsx";

const ReviewStatisticsOutDiv = styled.div`
    width: 45%;
`
const EmojiNameOutDiv = styled.div`
    display: flex;
    margin-bottom: 22px;
    align-items: center;
`

const EmojiStatisticsEmoji = styled.img`
    width: 5%;
    margin-right: 10px;
`

const ReviewStatisticsName = styled.div`
    font-size: 19px;
    font-weight: bold;
`

const BarChartOutDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ReviewAI = styled.div`
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    margin-top: 20px;
`

const ReviewAIName = styled.div`
    font-size: 19px;
    font-weight: bold;
`

const ChartOutDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`


function ReviewStatistics() {
    return (
        <ReviewStatisticsOutDiv>
            <EmojiNameOutDiv>
                <EmojiStatisticsEmoji src={emojiStatistics}></EmojiStatisticsEmoji>
                <ReviewStatisticsName>이모티콘으로 나타낸 리뷰 통계</ReviewStatisticsName>
            </EmojiNameOutDiv>
            <BarChartOutDiv>
                <BarChart />
            </BarChartOutDiv>
            <ReviewAI>
                <EmojiStatisticsEmoji src={emojiStatistics}></EmojiStatisticsEmoji>
                <ReviewAIName>AI가 보는 리뷰 통계</ReviewAIName>
            </ReviewAI>
            <ChartOutDiv>
                <DoughnutChart />
            </ChartOutDiv>
        </ReviewStatisticsOutDiv>
    )

}

export default ReviewStatistics;