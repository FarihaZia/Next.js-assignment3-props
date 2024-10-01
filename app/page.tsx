import Image from "next/image";
import Card from "./components/card";

export default function Home(){
    return(
        <div>
            <Card name="Fariha Zia" rollno={1234} day="Monday" campus="Main" />
            <Card name="Zymal" rollno={5678} day="Tuesday" campus="Main" />
            <Card name="Samia" rollno={9876} day="Wednesday" campus="Main" />

        </div>
    )
}