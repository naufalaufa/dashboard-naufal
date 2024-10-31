"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";

type Props = {};

type Users = {
  id: number;
  name: string;
  departement: string;
  age: number;
  gender: "men" | "women";
};

const Employe = (props: Props) => {
  const tableUsers: Users[] = [
    {
      id: 1,
      name: "naufal",
      departement: "Technology",
      age: 19,
      gender: "men",
    },
    {
      id: 2,
      name: "farha",
      departement: "Social Media Specialist",
      age: 10,
      gender: "women",
    },
    {
      id: 3,
      name: "madih",
      departement: "Copywritter",
      age: 32,
      gender: "men",
    },
    {
      id: 4,
      name: "munawaroh",
      departement: "Copywritter",
      age: 20,
      gender: "women",
    },
    {
      id: 5,
      name: "zihra angelina",
      departement: "Tiktok Specialist",
      age: 19,
      gender: "women",
    },
    {
      id: 6,
      name: "rizal",
      departement: "Video Editor",
      age: 22,
      gender: "men",
    },
    {
      id: 7,
      name: "rasya",
      departement: "Video Editor",
      age: 19,
      gender: "men",
    },
    {
      id: 8,
      name: "Putri",
      departement: "Video Production",
      age: 19,
      gender: "women",
    },
    {
      id: 9,
      name: "anton",
      departement: "Video Production",
      age: 23,
      gender: "men",
    },
    {
      id: 10,
      name: "rizky",
      departement: "Chef Of Executife",
      age: 40,
      gender: "men",
    },
  ];

  const [tables, setTables] = useState<Users[]>(tableUsers);

  const handleDelete = (id: number) => {
    const updateTables = tables.filter((user) => user.id !== id);
    setTables(updateTables);
  };

  return (
    <>
      <Table>
        <TableCaption>The Employe Of PT Naufal Aufa Corporated</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Departement</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {tables.map((item: Users) => {
          return (
            <TableBody key={item.name}>
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.departement}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleDelete(item.id)}
                      className="text-xs"
                    >
                      DELETE
                    </Button>
                    <Button className="text-xs">EDIT</Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </>
  );
};

export default Employe;
