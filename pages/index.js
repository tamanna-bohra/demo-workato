// import { useState } from "react";

// export default function Home() {
//   const [positionType, setPositionType] = useState("");
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const positionTypes = [
//     "Administration",
//     "Lecturer",
//     "Research Staff",
//     "Visiting Faculty",
//     "Tenure Track",
//   ];

//   const searchJobs = async () => {
//     if (!positionType) {
//       setError("Please select a position type");
//       return;
//     }
//     setError("");
//     setLoading(true);
//     setJobs([]);

//     try {
//       const response = await fetch("/api/jobs", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ position_type: positionType }), // adjust to API schema
//       });

//       const data = await response.json();

//       if (!data || !data.json_output) {
//         setError("No data received from API");
//         setLoading(false);
//         return;
//       }

//       const parsedJobs = JSON.parse(data.json_output);
//       setJobs(parsedJobs);
//     } catch (err) {
//       setError("Failed to fetch jobs");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Job Postings</h1>
//       <p>Select a position type to view jobs:</p>

//       <div>
//         <select value={positionType} onChange={(e) => setPositionType(e.target.value)}>
//           <option value="">-- Select --</option>
//           {positionTypes.map((pt) => (
//             <option key={pt} value={pt}>{pt}</option>
//           ))}
//         </select>

//         <button onClick={searchJobs} style={{ marginLeft: "10px" }}>
//           Search
//         </button>
//       </div>

//       {loading && <p>Loading jobs...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <div>
//         {jobs.map((job) => (
//           <div key={job.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
//             <h3>{job.name || "Untitled Position"}</h3>
//             <p><strong>Department:</strong> {job.unit_name || "N/A"}</p>
//             <p><strong>Location:</strong> {job.location || "N/A"}</p>
//             <p><strong>Type:</strong> {job.position_type_name || "N/A"}</p>
//             <p><strong>Status:</strong> {job.open ? "Open" : "Closed"}</p>
//             <p><strong>Applications:</strong> {job.application_count || 0}</p>
//             <p><strong>Approval Status:</strong> {job.approval_status || "N/A"}</p>
//           </div>
//         ))}
//         <button>Apply</button>
//       </div>
      
//     </div>
//   );
// }

import { useState } from "react";
import { Search, MapPin, Users, CheckCircle, XCircle, Building, User } from "lucide-react";

export default function Home() {
  const [positionType, setPositionType] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const positionTypes = [
    "Administration",
    "Lecturer", 
    "Research Staff",
    "Visiting Faculty",
    "Tenure Track",
  ];

  const searchJobs = async () => {
    if (!positionType) {
      setError("Please select a position type");
      return;
    }
    setError("");
    setLoading(true);
    setJobs([]);

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ position_type: positionType }),
      });

      const data = await response.json();

      if (!data || !data.json_output) {
        setError("No data received from API");
        setLoading(false);
        return;
      }

      const parsedJobs = JSON.parse(data.json_output);
      setJobs(parsedJobs);
    } catch (err) {
      setError("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid #f3f4f6'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1.5rem',
      textAlign: 'center'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #2563eb, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.75rem'
    },
    subtitle: {
      color: '#6b7280',
      fontSize: '1.125rem'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1.5rem'
    },
    searchCard: {
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      marginBottom: '2rem',
      border: '1px solid #f3f4f6'
    },
    searchForm: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'end',
      flexWrap: 'wrap'
    },
    formGroup: {
      flex: 1,
      minWidth: '250px'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    selectWrapper: {
      position: 'relative'
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      backgroundColor: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      color: '#111827',
      cursor: 'pointer',
      transition: 'all 0.2s',
      appearance: 'none'
    },
    selectFocus: {
      outline: 'none',
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
    },
    selectIcon: {
      position: 'absolute',
      right: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: '#9ca3af'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 2rem',
      background: 'linear-gradient(135deg, #2563eb, #9333ea)',
      color: '#ffffff',
      fontWeight: '500',
      borderRadius: '0.75rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      fontSize: '1rem'
    },
    buttonHover: {
      background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
      transform: 'scale(1.02)'
    },
    buttonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      transform: 'none'
    },
    spinner: {
      width: '20px',
      height: '20px',
      border: '2px solid transparent',
      borderTop: '2px solid #ffffff',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    errorCard: {
      marginTop: '1rem',
      padding: '1rem',
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '0.75rem',
      color: '#dc2626',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    loadingSection: {
      textAlign: 'center',
      padding: '3rem 0'
    },
    loadingContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      justifyContent: 'center',
      color: '#6b7280'
    },
    loadingSpinner: {
      width: '32px',
      height: '32px',
      border: '2px solid transparent',
      borderTop: '2px solid #2563eb',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    resultsHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.5rem'
    },
    resultsTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#111827'
    },
    jobsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    jobCard: {
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f3f4f6',
      overflow: 'hidden',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    jobCardHover: {
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)'
    },
    jobCardContent: {
      padding: '2rem'
    },
    jobHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '1.5rem'
    },
    jobInfo: {
      flex: 1
    },
    jobTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '0.5rem',
      transition: 'color 0.2s'
    },
    jobTitleHover: {
      color: '#2563eb'
    },
    jobDepartment: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#6b7280',
      marginBottom: '1rem'
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    statusOpen: {
      backgroundColor: '#d1fae5',
      color: '#065f46'
    },
    statusClosed: {
      backgroundColor: '#fee2e2',
      color: '#991b1b'
    },
    jobDetails: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    },
    detailItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#374151'
    },
    detailIcon: {
      color: '#9ca3af'
    },
    jobActions: {
      display: 'flex',
      gap: '0.75rem'
    },
    primaryButton: {
      flex: 1,
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(135deg, #2563eb, #9333ea)',
      color: '#ffffff',
      fontWeight: '500',
      borderRadius: '0.75rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    primaryButtonHover: {
      background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
      transform: 'scale(1.02)'
    },
    secondaryButton: {
      padding: '0.75rem 1.5rem',
      border: '1px solid #d1d5db',
      color: '#374151',
      fontWeight: '500',
      borderRadius: '0.75rem',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    secondaryButtonHover: {
      backgroundColor: '#f9fafb'
    },
    emptyState: {
      textAlign: 'center',
      padding: '4rem 0'
    },
    emptyIcon: {
      margin: '0 auto 1rem',
      color: '#d1d5db'
    },
    emptyTitle: {
      fontSize: '1.25rem',
      fontWeight: '500',
      color: '#111827',
      marginBottom: '0.5rem'
    },
    emptyDescription: {
      color: '#6b7280'
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .job-card:hover .job-title {
          color: #2563eb !important;
        }
        
        .search-button:hover {
          background: linear-gradient(135deg, #1d4ed8, #7c3aed) !important;
          transform: scale(1.02) !important;
        }
        
        .job-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15) !important;
        }
        
        .primary-btn:hover {
          background: linear-gradient(135deg, #1d4ed8, #7c3aed) !important;
          transform: scale(1.02) !important;
        }
        
        .secondary-btn:hover {
          background-color: #f9fafb !important;
        }
        
        .select-input:hover {
          border-color: #9ca3af !important;
        }
        
        .select-input:focus {
          outline: none !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        }
      `}</style>
      
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Academic Job Portal</h1>
          <p style={styles.subtitle}>Discover your next career opportunity in academia</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Search Section */}
        <div style={styles.searchCard}>
          <div style={styles.searchForm}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="position-select">
                Position Type
              </label>
              <div style={styles.selectWrapper}>
                <select 
                  id="position-select"
                  value={positionType}
                  onChange={(e) => setPositionType(e.target.value)}
                  style={styles.select}
                  className="select-input"
                >
                  <option value="">-- Select Position Type --</option>
                  {positionTypes.map((pt) => (
                    <option key={pt} value={pt}>{pt}</option>
                  ))}
                </select>
                <div style={styles.selectIcon}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <button 
              onClick={searchJobs}
              disabled={loading}
              style={{
                ...styles.button,
                ...(loading ? styles.buttonDisabled : {})
              }}
              className="search-button"
            >
              {loading ? (
                <>
                  <div style={styles.spinner}></div>
                  Searching...
                </>
              ) : (
                <>
                  <Search size={20} />
                  Search Jobs
                </>
              )}
            </button>
          </div>

          {error && (
            <div style={styles.errorCard}>
              <XCircle size={16} />
              {error}
            </div>
          )}
        </div>

        {/* Loading Section */}
        {loading && (
          <div style={styles.loadingSection}>
            <div style={styles.loadingContent}>
              <div style={styles.loadingSpinner}></div>
              <span style={{ fontSize: '1.125rem' }}>Finding the perfect opportunities for you...</span>
            </div>
          </div>
        )}

        {/* Results Section */}
        {jobs.length > 0 && (
          <div>
            <div style={styles.resultsHeader}>
              <h2 style={styles.resultsTitle}>
                Available Positions ({jobs.length})
              </h2>
            </div>
            
            <div style={styles.jobsGrid}>
              {jobs.map((job) => (
                <div key={job.id} style={styles.jobCard} className="job-card">
                  <div style={styles.jobCardContent}>
                    <div style={styles.jobHeader}>
                      <div style={styles.jobInfo}>
                        <h3 style={styles.jobTitle} className="job-title">
                          {job.name || "Untitled Position"}
                        </h3>
                        <div style={styles.jobDepartment}>
                          <Building size={16} />
                          <span>{job.unit_name || "Department not specified"}</span>
                        </div>
                      </div>
                      
                      <div>
                        <span style={{
                          ...styles.statusBadge,
                          ...(job.open ? styles.statusOpen : styles.statusClosed)
                        }}>
                          {job.open ? <CheckCircle size={14} /> : <XCircle size={14} />}
                          {job.open ? "Open" : "Closed"}
                        </span>
                      </div>
                    </div>

                    <div style={styles.jobDetails}>
                      <div>
                        <div style={styles.detailItem}>
                          <MapPin size={16} style={styles.detailIcon} />
                          <span>{job.location || "Location not specified"}</span>
                        </div>
                        <div style={{ ...styles.detailItem, marginTop: '0.75rem' }}>
                          <User size={16} style={styles.detailIcon} />
                          <span>{job.position_type_name || "N/A"}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div style={styles.detailItem}>
                          <Users size={16} style={styles.detailIcon} />
                          <span>{job.application_count || 0} Applications</span>
                        </div>
                        <div style={{ ...styles.detailItem, marginTop: '0.75rem' }}>
                          <CheckCircle size={16} style={styles.detailIcon} />
                          <span>Status: {job.approval_status || "Pending"}</span>
                        </div>
                      </div>
                    </div>

                    <div style={styles.jobActions}>
                      <button 
                        style={{
                          ...styles.primaryButton,
                          ...(job.open ? {} : styles.buttonDisabled)
                        }}
                        className="primary-btn"
                        disabled={!job.open}
                      >
                        {job.open ? "Apply Now" : "Position Closed"}
                      </button>
                      <button style={styles.secondaryButton} className="secondary-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && jobs.length === 0 && positionType && !error && (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>
              <Search size={64} />
            </div>
            <h3 style={styles.emptyTitle}>No positions found</h3>
            <p style={styles.emptyDescription}>
              Try selecting a different position type to see available opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}