"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FaDesktop, FaBook, FaPen, FaPhone, FaGlasses, FaChair, FaChalkboard } from "react-icons/fa";
import { PiDesk } from "react-icons/pi";
import { FaBottleWater } from "react-icons/fa6";

const items = [
    { id: 1, name: "Computer", icon: <FaDesktop size={50} /> },
    { id: 2, name: "Note pad", icon: <FaBook size={50} /> },
    { id: 3, name: "Pen", icon: <FaPen size={50} /> },
    { id: 4, name: "Phone", icon: <FaPhone size={50} /> },
    { id: 5, name: "Glasses", icon: <FaGlasses size={50} /> },
    { id: 6, name: "Water Bottle", icon: <FaBottleWater size={50} /> },
    { id: 7, name: "Chair", icon: <FaChair size={50} /> },
    { id: 8, name: "Desk", icon: <PiDesk size={50} /> },
    { id: 9, name: "Whiteboard", icon: <FaChalkboard size={50} /> },
];

export default function Checklist() {
    const [checkedItems, setCheckedItems] = useState({});

    const toggleCheck = (id) => {
        setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const resetChecks = () => {
        setCheckedItems({});
    };

    return (
        <div className="grid gap-4 p-6 max-w-md mx-auto">
            {items.map((item) => (
                <Card key={item.id} className="flex items-center p-4 gap-6">
                    {item.icon}
                    <label className="flex items-center gap-2">
                        <Checkbox
                            checked={checkedItems[item.id] || false}
                            onCheckedChange={() => toggleCheck(item.id)}
                        />
                        {item.name}
                    </label>
                </Card>
            ))}
            <Button onClick={resetChecks} className="mt-4">Reset</Button>
        </div>
    );
}
