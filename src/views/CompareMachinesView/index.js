import React from "react";
import Card from "../../components/Card";
import { statusColors } from "../../constants/colors";
import RoundedButton from "../../components/RoundedButton";

export default function () {
    // Demo data to simulate data recieved from api
    const demoData = [
        {
            id: 1,
            status: "acceptable",
            count: 2,
        },
        {
            id: 2,
            status: "monitor",
            count: 3,
        },
        {
            id: 3,
            status: "alarm",
            count: 0,
        },
        {
            id: 4,
            status: "danger",
            count: 0,
        },
        {
            id: 5,
            status: "No status",
            count: 2,
        },
    ];

    const statusButtonHandler = (id) => {
        alert(`Status Button ${id} pressed`);
    };

    const statusButtons = demoData.length
        ? demoData.map((item, index) => (
              <RoundedButton
                  key={index}
                  color={
                      statusColors[item.status.toUpperCase().replace(" ", "_")]
                  }
                  label={`${item.status} (${item.count})`}
                  attributes={{
                      onClick: () => statusButtonHandler(item.id),
                  }}
              />
          ))
        : "No Data recieved";

    return <Card title="Compare Machines">{statusButtons}</Card>;
}
