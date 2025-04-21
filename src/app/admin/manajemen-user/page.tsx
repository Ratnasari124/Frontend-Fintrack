import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const users = [
  { id: 1, username: "Admin1", password: "cabang1klojen" },
  { id: 2, username: "Admin2", password: "cabang2lowokwaru" },
  { id: 3, username: "Admin3", password: "cabang3junrejo" },
  { id: 4, username: "Admin4", password: "cabang4junrejo" },
];

export default function UserManagement() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Manajemen User</h1>
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Input type="text" placeholder="Search User" className="w-1/3" />
            <Button className="bg-slate-600 text-white">+ Tambah User</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-900 text-white">
                <TableHead className="text-white">ID</TableHead>
                <TableHead className="text-white">USERNAME</TableHead>
                <TableHead className="text-white">PASSWORD</TableHead>
                <TableHead className="text-white">AKSI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell className="space-x-2">
                    <Button className="bg-blue-700 text-white">Rincian</Button>
                    <Button className="bg-yellow-400 text-white">Ubah</Button>
                    <Button className="bg-red-600 text-white">Hapus</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
