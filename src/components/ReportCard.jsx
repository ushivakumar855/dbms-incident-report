// =============================================
// Report Card Component
// Author: ushivakumar855
// Date: 2025-10-10
// =============================================

import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatRelativeTime, getStatusColor, truncateText } from '../utils/helpers';
import { FaUser, FaCalendar, FaFolder, FaComments } from 'react-icons/fa';

const ReportCard = ({ report }) => {
    return (
        <Card className="mb-3 shadow-sm hover-shadow">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0">
                        <Link 
                            to={`/reports/${report.ReportID}`}
                            className="text-decoration-none text-dark"
                        >
                            Report #{report.ReportID}
                        </Link>
                    </Card.Title>
                    <Badge bg={getStatusColor(report.Status)}>
                        {report.Status}
                    </Badge>
                </div>

                <Card.Text className="text-muted">
                    {truncateText(report.Description, 150)}
                </Card.Text>

                <div className="d-flex flex-wrap gap-3 text-muted small">
                    <span>
                        <FaUser className="me-1" />
                        {report.ReporterName || 'Anonymous'}
                    </span>
                    <span>
                        <FaFolder className="me-1" />
                        {report.CategoryName}
                    </span>
                    <span>
                        <FaCalendar className="me-1" />
                        {formatRelativeTime(report.Timestamp)}
                    </span>
                    {report.ActionCount > 0 && (
                        <span>
                            <FaComments className="me-1" />
                            {report.ActionCount} {report.ActionCount === 1 ? 'action' : 'actions'}
                        </span>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default ReportCard;
