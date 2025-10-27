// =============================================
// View Reports Page
// Author: ushivakumar855
// Date: 2025-10-10
// =============================================

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { reportAPI, categoryAPI } from '../services/api';
import { handleAPIError } from '../utils/helpers';
import ReportCard from '../components/ReportCard';
import FilterBar from '../components/FilterBar';
import LoadingSpinner from '../components/LoadingSpinner';

const ViewReports = () => {
    const [reports, setReports] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        status: '',
        categoryId: '',
        search: ''
    });

    useEffect(() => {
        fetchData();
    }, [filters.status, filters.categoryId]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [reportsRes, categoriesRes] = await Promise.all([
                reportAPI.getAll({ 
                    status: filters.status, 
                    categoryId: filters.categoryId 
                }),
                categoryAPI.getAll()
            ]);

            setReports(reportsRes.data.data);
            setCategories(categoriesRes.data.data);
        } catch (error) {
            console.error('Error:', handleAPIError(error));
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }));
    };

    // Filter reports based on search
    const filteredReports = reports.filter(report => {
        if (!filters.search) return true;
        const searchLower = filters.search.toLowerCase();
        return (
            report.Description?.toLowerCase().includes(searchLower) ||
            report.CategoryName?.toLowerCase().includes(searchLower) ||
            report.ReporterName?.toLowerCase().includes(searchLower)
        );
    });

    if (loading) {
        return <LoadingSpinner message="Loading reports..." />;
    }

    return (
        <Container className="my-5">
            <h2 className="mb-4">� All Reports</h2>

            <FilterBar 
                filters={filters}
                onFilterChange={handleFilterChange}
                categories={categories}
            />

            {filteredReports.length === 0 ? (
                <Alert variant="info">
                    No reports found. Try adjusting your filters or submit a new report.
                </Alert>
            ) : (
                <div>
                    <p className="text-muted mb-3">
                        Showing {filteredReports.length} report(s)
                    </p>
                    <Row>
                        {filteredReports.map(report => (
                            <Col key={report.ReportID} md={12}>
                                <ReportCard report={report} />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </Container>
    );
};

export default ViewReports;
