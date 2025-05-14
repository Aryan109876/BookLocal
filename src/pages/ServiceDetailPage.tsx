import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ServiceDetail from '../components/services/ServiceDetail';
import { getServiceById } from '../data/services';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = id ? getServiceById(id) : undefined;
  
  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">
              The service you're looking for doesn't exist or has been removed.
            </p>
            <Button 
              variant="primary"
              onClick={() => navigate('/services')}
              icon={<ArrowLeft className="h-5 w-5 mr-2" />}
            >
              Back to Services
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-gray-100 pt-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <button 
              className="flex items-center text-gray-600 hover:text-blue-600"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to results
            </button>
          </div>
          
          <ServiceDetail service={service} />
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetailPage;