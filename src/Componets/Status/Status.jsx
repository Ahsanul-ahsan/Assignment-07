import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { TimeLineContext } from "../Context/TimeLineContext";





const Status = () => {

    const { timeLine } = useContext(TimeLineContext);


    const callCount = timeLine.filter((t) => t.actionType === "call").length;
    const textCount = timeLine.filter((t) => t.actionType === "text").length;
    const videoCount = timeLine.filter((t) => t.actionType === "video").length;

    const data = [
        { name: "Call", value: callCount, fill: "#244D3F" },
        { name: "Text", value: textCount, fill: "#7E35E1" },
        { name: "Video", value: videoCount, fill: "#37A163" },
    ];



    return (
        <div className="max-w-10/12 mx-auto mt-10">
            <h1 className="font-bold text-2xl mb-6">Friendship Analytics</h1>
            <div>
                <p className="text-center font-semibold">
                    By Interaction Type
                </p>
            </div>

            <div className="flex justify-center items-center">

                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={5}
                    />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};



export default Status;