export class RolesTable {
	public static roles: any = [
        {
            id: 1,
            title: 'Board',
            isCoreRole: true,
            permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            title: 'Personnel',
            isCoreRole: false,
			permissions: [3, 4, 10]
        },
        {
            id: 3,
            title: 'Residents',
            isCoreRole: false,
			permissions: []
        }
    ];
}
