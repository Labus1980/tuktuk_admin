import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import EditClientModal from "./EditClientModal";
import DeleteClientModal from "./DeleteClientModal";
import type { Client } from "@/types";

export default function ClientsList() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .order("name");
      if (error) throw error;
      return data as Client[];
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading" />
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Клиенты</h2>
        <button
          className="btn-primary"
          onClick={() => {
            setSelectedClient(null);
            setIsEditModalOpen(true);
          }}
        >
          Добавить клиента
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Номер паспорта</th>
              <th>Адрес</th>
              <th className="w-24">Действия</th>
            </tr>
          </thead>
          <tbody>
            {clients?.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.passport_number}</td>
                <td>{client.address}</td>
                <td>
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => {
                        setSelectedClient(client);
                        setIsEditModalOpen(true);
                      }}
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      onClick={() => {
                        setSelectedClient(client);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditClientModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        client={selectedClient}
      />

      <DeleteClientModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        client={selectedClient}
      />
    </div>
  );
} 