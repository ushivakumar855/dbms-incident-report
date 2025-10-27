// =============================================
// Filter Bar Component
// Author: ushivakumar855
// Date: 2025-10-10
// =============================================

import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { STATUSES } from '../utils/helpers';

const FilterBar = ({ filters, onFilterChange, categories }) => {
    return (
        <div className="bg-light p-3 rounded mb-4">
            <Row>
                <Col md={4}>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            value={filters.status}
                            onChange={(e) => onFilterChange('status', e.target.value)}
                        >
                            <option value="">All Statuses</option>
                            {STATUSES.map(status => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            value={filters.categoryId}
                            onChange={(e) => onFilterChange('categoryId', e.target.value)}
                        >
                            <option value="">All Categories</option>
                            {categories.map(category => (
                                <option key={category.CategoryID} value={category.CategoryID}>
                                    {category.Name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Form.Group>
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search reports..."
                            value={filters.search}
                            onChange={(e) => onFilterChange('search', e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </div>
    );
};

export default FilterBar;
