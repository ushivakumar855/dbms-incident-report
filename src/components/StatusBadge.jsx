// =============================================
// Status Badge Component
// Author: ushivakumar855
// Date: 2025-10-10
// =============================================

import React from 'react';
import { Badge } from 'react-bootstrap';
import { getStatusColor } from '../utils/helpers';

const StatusBadge = ({ status }) => {
    return (
        <Badge bg={getStatusColor(status)} className="px-3 py-2">
            {status}
        </Badge>
    );
};

export default StatusBadge;
