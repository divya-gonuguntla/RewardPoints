export let CustomerData =
    [
        createData(120, 1, "John Smith", "01-05-2023 09:00:10 AM"),
        createData(75, 1, "John Smith", "01-14-2023 11:00:22 AM"),
        createData(94, 1, "John Smith", "12-01-2022 12:30:40 PM"),
        createData(10, 1, "John Smith", "12-14-2022 02:05:58 PM"),
        createData(75, 1, "John Smith", "12-21-2022 04:07:12 PM"),
        createData(200, 2, "Lucky", "11-01-2022 10:07:44 AM"),
        createData(1, 2, "Lucky", "11-09-2023 06:19:07 PM"),
        createData(80, 2, "Lucky", "11-11-2022 07:08:10 PM"),
        createData(224, 2, "Lucky", "11-27-2022 08:06:16 PM"),
        createData(125, 3, "Krishna", "01-07-2023 08:30:35 AM"),
        createData(75, 3, "Krishna", "12-01-2022 10:07:05 AM"),
        createData(10, 4, "Raj", "12-19-2022 12:07:16 PM"),
        createData(75, 4, "Raj", "11-21-2022 01:07:28 PM"),
        createData(200, 5, "Pete", "11-26-2022 04:07:19 PM"),
        createData(224, 5, "Pete", "11-28-2022 02:25:25 PM"),
        createData(120, 6, "Tejas LLC", "01-21-2023 10:07:55 AM"),
        createData(150, 6, "Tejas LLC", "12-24-2022 11:07:29 AM"),
        createData(90, 6, "Tejas LLC", "11-22-2022 04:07:39 PM")
    ] as const

export function getData() {
    return Promise.resolve([...CustomerData])
}

export type historyObj = {
    transactionDate: string,
    customerId: number,
    amount: number,
    rewardPoints: number,
    name: string
}

export type totalRewardPoints = {
    customerId: number,
    name: string,
    rewardPoints: number,
}

export type customerInfo = {
    amount: number,
    customerId: number,
    name: string,
    transactionDate: string,
}

export type customerRewardsInfo = {

    customerId: number,
    month: string,
    monthNumber: number,
    numOfTransactions: number,
    name: string,
    points: number,
    history: historyObj[] | []
}


export function createData(
    amount: number,
    customerId: number,
    name: string,
    transactionDate: string,
) {
    return { amount, customerId, name, transactionDate };
}