import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import CeoNaufal from "../../../public/image/ceo.png";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div>
      <Card>
        <CardHeader className="text-center">Profile Summary Company</CardHeader>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
          <CardContent>
            <Image
              src={CeoNaufal}
              alt="error"
              width={600}
              height={600}
              objectFit="cover"
            />
          </CardContent>
          <div className="grid grid-col-3">
            <div>
              <p className="text-xs max-w-[40vw] m-auto">
                Naufal Aufa Corporated is a dynamic and forward-thinking company
                dedicated to innovation and excellence in its field.
                Specializing in cutting-edge solutions, the company is committed
                to delivering high-quality products and services that meet the
                evolving needs of its clients. With a team of skilled
                professionals, Naufal Aufa Corporated is poised to make a
                significant impact in the industry, driving progress and setting
                new standards for success.
              </p>
            </div>
            <div>
              <h1 className="font-bold">CEO | CTO </h1>
              <div className="flex items-center gap-3">
                <p>Chief Executive Officer</p>
                <p>Chief Technology Officer</p>
              </div>

              <p>Mochamad Naufal Aufa Rifqi</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
