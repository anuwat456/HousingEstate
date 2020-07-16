export class StatusTable {
    public static status: any = [
        {
            id: 1,
            title: 'Personal Manager',
            isCoreRole: false,
            permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            title: 'Finance Manager',
            isCoreRole: false,
			permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 3,
            title: 'Assurance Manager',
            isCoreRole: false,
			permissions: [3, 4, 10]
        },
        {
            id: 4,
            title: 'Technical Manager',
            isCoreRole: false,
            permissions: [3, 4, 10]
        },
        {
            id: 5,
            title: 'Residents',
            isCoreRole: false,
			permissions: []
        }
    ];
}